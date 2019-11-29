var i = 100;
var b = 100;
var hideDreamBool = false;
var bodyContent = document.getElementsByClassName('bodyContent');
var dream = document.getElementById('dream');

function showDream() {
    $("#dream").removeClass("hide");


    let id = setInterval(frame2, 5);

    function frame2() {
        if (i > 99 || hideDreamBool == true) {
            clearInterval(id);

        } else {
            i++;
            dream.style.opacity = i / 100;
        }

    }

    hideDreamBool = false;
}

function hideDream() {


    let id = setInterval(frame, 5);

    function frame() {
        if (i <= 0 || hideDreamBool == false) {
            clearInterval(id);
            $("#dream").addClass("hide");
        } else {
            i--;
            dream.style.opacity = i / 100;
        }

    }
    hideDreamBool = true;
}

function infiniteScroll() {


    var listElm = document.querySelector('#infinite-list');

    // Add items.
    var nextItem = 1;
    var actItem = 1;
    var loadMore = function () {
        console.log("loadMore");
        var div = $(".bodyContent");
        var t2 = "";
        div.append("<div>");
        //if there are query params
        if (window.location.href.indexOf("?") > 0) {
            console.log("true");

            let urlParams = new URLSearchParams(window.location.search);
            let category = urlParams.get('category');
            let ingredient = urlParams.get('ingredient');
            console.log("c: " + category + " i: " + ingredient)

            //get where the ingredient is equal to the param
            db.collection("recipes").where("mainIngredient", "==", ingredient).where("category", "==", category)
                .get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {

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
            //get all recipes
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

function createRecipe() {
    var index = 0;

    let urlParams = new URLSearchParams(window.location.search);
    let myParam = urlParams.get('title');

    db.collection("recipes").where("title", "==", myParam).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                index = doc.id;
            });
        })
        .then(function () {


            if (index != null && index != 0) {
                db.collection("recipes").doc(index)
                    .get()
                    .then(function (doc) {
                        console.log(doc.data());
                        let t2 = "";

                        t2 += "<div class='recipePageContainer'>";

                        t2 += "<img class='recipePageImage' src='" + doc.data().image + "'>";

                        t2 += "<span class=recipePageTitle>" + doc.data().title + "</span><br/>";

                        t2 += "<span class=recipePageText><span class=recipePageHeader>Ingredients:</span>"
                        
                        doc.data().recipeIngredient.forEach(function(i) {
                            t2 += "<br/>" + i;
                        })

                        t2 += "</span><br/>";

                        t2 += "<span class=recipePageText><span class=recipePageHeader>Instructions:</span>"

                        doc.data().instructions.forEach(function(i) {
                            t2 += "<br/>" + i;
                        })

                        t2 += "</span>";

                        t2 += "</div>";

                        $("#recipeStuff").append(t2);

                    })
            } else {
                $("#recipeStuff").append("ERROR 404: No recipe found!");
            }
        });
}