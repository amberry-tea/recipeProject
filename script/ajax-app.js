// https://expressjs.com/en/guide/routing.html


// REQUIRES
const lists = require('./core/data');
const express = require('express');
// as of Express 4, you need this:
// https://www.npmjs.com/package/body-parser
const bodyParser = require('body-parser');
const app = express();
// https://www.npmjs.com/package/jsdom
const { JSDOM } = require('jsdom');
const fs = require("fs");

app.get('/', function (req, res) {
    let doc = fs.readFileSync('./static/html/index.html', "utf8");
    //console.log(JSDOM);
    //let dom = new JSDOM(doc);
    //let $ = require("jquery")(dom.window);


    //res.send(dom.serialize());
    res.send(doc);
});

app.use('/js', express.static('static/js'))
app.use('/css', express.static('static/css'))
app.use('/images', express.static('static/images'))

app.get('/ajax-GET', function (req, res) {

    // set the type of response:
    res.setHeader('Content-Type', 'application/json');
    let d = new Date();

    res.send({ msg: d });

})


//ajax-GET-list gets a list of things
  //Depending on what you tell it, it will get it.
  //This is arrons protocol for getting lists
//This function can change depending on what is provided using if else if.
app.get('/ajax-GET-list', function (req, res) {

    //res.setHeader('Content-Type', 'application/json');
    //console.log(req.query['format']);
    let formatOfResponse = req.query['format'];
    let dataList = null;

    if(formatOfResponse == 'html-list') {

      //sends the data type of the data for the browser
        res.setHeader('Content-Type', 'text/html');
      //accesses list
        dataList = lists.getHTML();
      //sends it in response object
        res.send(dataList);

    } else if(formatOfResponse == 'json-list') {

        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSON();
        res.send(dataList);

    } else if(formatOfResponse == 'getJSONCourses') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSONCourses();
        res.send(dataList);
        
    }else {
        res.send({msg: 'Wrong format!'});
    }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Notice that this is a 'POST'
app.post('/post-form', function (req, res) {
      res.setHeader('Content-Type', 'application/json');

      console.log("Stuff sent to server", req.body);

      res.send(["You sent me:", req.body]);

});

// for page not found (i.e., 404)
app.use(function (req, res, next) {
  res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
})

// RUN SERVER
let port = 8000;
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
})
