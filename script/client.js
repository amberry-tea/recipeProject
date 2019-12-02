

    var i = 100;
    var b = 100;

    var hideInfoBool = false;
    var bodyContent = document.getElementsByClassName('bodyContent');
    var info = document.getElementById('info');

    //Function to show the home page informative menu after it has been hidden.
    //Disabled because its design was ruled out as intrusive to the user
    /*
    function showInfo() {
        $("#info").removeClass("hide");


        let id = setInterval(frame2, 5);

        function frame2() {
            if (i > 99 || hideInfoBool == true) {
                clearInterval(id);

            } else {
                i++;
                info.style.opacity = i / 100;
            }

        }

        hideInfoBool = false;
    } */

    function hideInfo() {


        let id = setInterval(frame, 5);

        function frame() {
            if (i <= 0 || hideInfoBool == false) {
                clearInterval(id);
                $("#info").addClass("hide");
            } else {
                i--;
                info.style.opacity = i / 100;
            }

        }
        hideInfoBool = true;
    }

    function loadRecipes() {

        console.log("loadRecipes");
        //if there are query params
        console.log("has params");

        let urlParams = new URLSearchParams(window.location.search);
        let category = urlParams.get('category');
        let ingredient = urlParams.get('ingredient');
        let cooked = (urlParams.get('cooked') == 'true');

        console.log(urlParams.get('cooked'));
        console.log("c: " + category + " i: " + ingredient + " cooked: " + cooked);

        //get where the ingredient is equal to the param
        let hasCategory = urlParams.has('category');
        let hasIngredient = urlParams.has('ingredient');
        let hasCooked = urlParams.has('cooked');

        console.log("categ: " + hasCategory + "ingred: " + hasIngredient + "cooke: " + hasCooked);

        if (hasCategory && hasIngredient && hasCooked) {
            db.collection("recipes")
                .where("mainIngredient", "==", ingredient)
                .where("category", "==", category)
                .where("cooked", "==", cooked)
                .get()
                .then(function (querySnapshot) {
                    recipeCreator(querySnapshot);
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });
        } else if (hasCategory && hasIngredient) {
            db.collection("recipes")
                .where("mainIngredient", "==", ingredient)
                .where("category", "==", category)
                .get()
                .then(function (querySnapshot) {
                    recipeCreator(querySnapshot);
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });
        } else if (hasCategory && hasCooked) {
            db.collection("recipes")
                .where("category", "==", category)
                .where("cooked", "==", cooked)
                .get()
                .then(function (querySnapshot) {
                    recipeCreator(querySnapshot);
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });
        } else if (hasCategory) {
            db.collection("recipes")
                .where("category", "==", category)
                .get()
                .then(function (querySnapshot) {
                    recipeCreator(querySnapshot);
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });
        } else if (hasIngredient && hasCooked) {
            db.collection("recipes")
                .where("mainIngredient", "==", ingredient)
                .where("cooked", "==", cooked)
                .get()
                .then(function (querySnapshot) {
                    recipeCreator(querySnapshot);
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });
        } else if (hasIngredient) {
            db.collection("recipes")
                .where("mainIngredient", "==", ingredient)
                .get()
                .then(function (querySnapshot) {
                    recipeCreator(querySnapshot);
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });
        } else if (hasCooked) {
            db.collection("recipes")
                .where("cooked", "==", cooked)
                .get()
                .then(function (querySnapshot) {
                    recipeCreator(querySnapshot);
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });
        } else {
            console.log("else");
            db.collection("recipes")
                .get()
                .then(function (querySnapshot) {
                    recipeCreator(querySnapshot);
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });
        }

    }

    function recipeCreator(querySnapshot) {
        var div = $(".bodyContent");
        var t2 = "";
        div.append("<div>");

        querySnapshot.forEach(function (doc) {

            t2 += "<div class='recipeContainer'>";

            t2 += "<img class='runnerimg' src='" + doc.data().image + "'>";

            t2 += "<span class=runnerName>" + doc.data().title + "</span>";

            t2 += "<span class=recipeText>Main Ingredient: " + doc.data().mainIngredient + "</span>";

            t2 += "</div>";

            div.append(t2);

            t2 = "";

        });
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
                console.log("has params");

                let urlParams = new URLSearchParams(window.location.search);
                let category = urlParams.get('category');
                let ingredient = urlParams.get('ingredient');
                let cooked = (urlParams.get('cooked') == 'true');
                console.log(urlParams.get('cooked'));
                console.log("c: " + category + " i: " + ingredient + " cooked: " + cooked);

                //get where the ingredient is equal to the param
                db.collection("recipes").where("mainIngredient", "==", ingredient).where("category", "==", category).where("cooked", "==", cooked)
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

            if ($(document).scrollTop() > 40 && hideInfoBool == false) {
                hideInfo();
            } else if ($(document).scrollTop() <= 40) {
                //Show info function disabled, as it is intrusive.
                //showInfo();
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

        $("#currentLocation").append(myParam);

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

                            doc.data().recipeIngredient.forEach(function (i) {
                                t2 += "<br/>" + i;
                            })

                            t2 += "</span><br/>";

                            t2 += "<span class=recipePageText><span class=recipePageHeader>Instructions:</span>"

                            doc.data().instructions.forEach(function (i) {
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