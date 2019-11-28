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
        console.log("loadMore");
        var div = $(".bodyContent");
        var t2 = "";
        div.append("<div>");

        if (window.location.href.indexOf("?") > 0) {
            console.log("true");
            db.collection("recipes").where("mainIngredient", "==", "potato")
                .get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        console.log(doc.data());
                        t2 += "<div class='recipeContainer'>";

                        t2 += "<img class='runnerimg' src='" + doc.data().image + "'>";

                        t2 += "<span class=runnerName>" + doc.data().title + "</span>";

                        t2 += "<span class=recipeText>Main Ingredient: " + doc.data().mainIngredient + "</span>";

                        t2 += "</div>";

                        div.append(t2);

                        t2 = "";
                    });
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });
        } else {
            console.log("false");
            db.collection("recipes").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    t2 += "<div class='recipeContainer'>";

                    t2 += "<img class='runnerimg' src='" + doc.data().image + "'>";

                    t2 += "<span class=runnerName>" + doc.data().title + "</span>";

                    t2 += "<span class=recipeText>Main Ingredient: " + doc.data().mainIngredient + "</span>";

                    t2 += "</div>";

                    div.append(t2);

                    t2 = ""
                });

            })
        

        }
        div.append("</div>");
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