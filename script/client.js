  
      // Get a reference to the database service
      var database = firebase.database();
  
  const firebaseConfig = {
    apiKey: "AIzaSyCe5qVI7blspULFqLJ1QIhoGnDnrB7vJwc",
    authDomain: "recipeproject-ba288.firebaseapp.com",
    databaseURL: "https://recipeproject-ba288.firebaseio.com",
    projectId: "recipeproject-ba288",
    storageBucket: "recipeproject-ba288.appspot.com",
    messagingSenderId: "199394858198",
    appId: "1:199394858198:web:d5fa1bd2f982ac14d92577",
    measurementId: "G-RFT5692BZ9"
  };

  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
//------------------------------------


$(document).ready(infiniteScroll());

var i = 100;
var b = 100;
var hideDreamBool = false;
var bodyContent = document.getElementsByClassName('bodyContent');
var dream = document.getElementById('dream');

function showDream() {

    //$("#content").addClass("blur");
    let id = setInterval(frame2, 5);

    function frame2() {
        if (i > 99 || hideDreamBool == true) {
            clearInterval(id);

        } else {
            i++;
            dream.style.opacity = i / 100;
            //bodyContent.style.filter = "blur(" + i + ")px";
        }

    }

    hideDreamBool = false;
}

function hideDream() { //console.log($(document).scrollTop());


    let id = setInterval(frame, 5);

    function frame() {
        if (i <= 0 || hideDreamBool == false) {
            clearInterval(id);
        } else {
            i--;
            dream.style.opacity = i / 100;
            //bodyContent.style.blur = i + "px";
        }

    }
    hideDreamBool = true;
    //$(".bodyContent").removeClass("blur");
}

function infiniteScroll() {


    var listElm = document.querySelector('#infinite-list');

    // Add 20 items.
    var nextItem = 1;
    var actItem = 1;
    var loadMore = function () {

        db.collection("cities").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        });

/*
        db.collection("recipes/").onSnapshot(function (d) {



            if (d.get("isA") != null)
              x = d.data()["isA"];  //sets data in dropdown menu to identity tag
            else
              x = "________";       // if user has not added tag yet
            document.getElementById("identityTag").innerHTML = x; //puts data in html
          });
        } */

        /*
        let t2 = "";
        for (let i = 0; i < data.length; i++) {

            t2 += "<div class='recipeContainer'>";
            //i used an id here for example, its not needed and should use a class
            t2 += "<img class='runnerimg' src='" + data[i]['image'] + "'>";
            //$("#runnerimg" + index).css(runnerImageStyle);

            t2 += "<span class=runnerName>" + data[i]['title'] + "</span>";

            t2 += "<span class=recipeText>" + data[i]['recipeIngredient'] + "</span>";

            t2 += "<span class=recipeText>" + data[i]['cal'] + "</span>";

            t2 += "<span class=recipeText>" + data[i]['time'] + "</span>";

            t2 += "<span class=recipeText>" + data[i]['price'] + "</span>";

            t2 += "</div>";


        }*/
        /*
        t2 += "<tr><td>" + data[i]['title'] + "</td><td>"
          + data[i]['mainIngredient'] + "</td><td>" + data[i]['recipeIngredient'] + "</td><td>"
          + data[i]['image'] + "</td></tr>";*/

        //t2 += "</div>";
        
        
        //var div = $(".bodyContent");
        //div.append(t2);

        //                var div = $("#content");
        //                let htmlStr = "<ul>";
        //                for(let i = 0; i < data.length; i++) {
        //                    htmlStr += "<li>" + data[i] + "</li>";
        //                }
        //                htmlStr += "</ul>";
        //                div.html(htmlStr);


        /*
          var item = document.createElement('li');
          item.innerText = 'Item ' + nextItem++ + ' ' + actItem++;
          listElm.appendChild(item);
          if (nextItem > 7) {
            nextItem = 1;
          } */

    }

    var body = document.body,
        html = document.documentElement;

    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    // Detect when scrolled to bottom.
    var content = document.querySelector('#content');

    document.addEventListener('scroll', function () {

        if ($(document).scrollTop() > 40 && hideDreamBool == false) {
            hideDream();
        } else if ($(document).scrollTop() <= 40) {
            showDream();
        }



        height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);

        if ($(window).height() + $(document).scrollTop() >= height - 5) {
            loadMore();
        }
    });

    // Initially load some items.
    loadMore();
}
/*
$(document).ready(function () {

    $('#content').click(function (e) {

        //eval("console.log('lolomg')");
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: {
                format: "getJSONCourses"
            },
            success: function (data) {
                //console.log("SUCCESS COURSES IN JSON:", data);
                let t2 = "";
                for (let i = 0; i < data.length; i++) {
                    //console.log(data[i]['name']);
                    //console.log(data[i].credits);
                    t2 += "<tr><td>" + data[i]['title'] + "</td><td>" +
                        data[i]['mainIngredient'] + "</td><td>" + data[i]['recipeIngredient'] + "</td><td>" +
                        data[i]['image'] + "</td></tr>";
                }
                t2 += "";
                var div = $("table");
                div.append(t2);
                //                var div = $("#content");
                //                let htmlStr = "<ul>";
                //                for(let i = 0; i < data.length; i++) {
                //                    htmlStr += "<li>" + data[i] + "</li>";
                //                }
                //                htmlStr += "</ul>";
                //                div.html(htmlStr);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });



    // PERFORM A HTTP POST, AND GET A RESPONSE FROM THE SERVER
    $('#submit').click(function (e) {
        let formData = {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            email: $("#email").val()
        };
        console.log("Form data to send:", formData);
        $.ajax({
            url: "/post-form",
            dataType: "json",
            type: "POST",
            data: formData,
            success: function (data) {
                console.log("SUCCESS JSON:", data);
                // how do we know what we are getting?
                $("#p2").html(data[0] + " " + data[1]['firstName'] +
                    " " + data[1]['lastName'] +
                    " " + data[1]['email']
                );

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p2").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

});
*/