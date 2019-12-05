var queryString = "";

$("#potato").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "question1.html?" + queryString + "&ingredient=potato";
    window.location.href = queryString;
});

$("#carrot").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "question1.html?" + queryString + "&ingredient=carrot";
    window.location.href = queryString;
});

$("#apple").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "question1.html?" + queryString + "&ingredient=apple";
    window.location.href = queryString;
});

$("#bread").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "question1.html?" + queryString + "&ingredient=bread";
    window.location.href = queryString;
});

$("#pasta").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "question1.html?" + queryString + "&ingredient=pasta";
    window.location.href = queryString;
});

$("#oats").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "question1.html?" + queryString + "&ingredient=oats";
    window.location.href = queryString;
});

$("#tofu").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "question1.html?" + queryString + "&ingredient=tofu";
    window.location.href = queryString;
});

$("#nuts").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "question1.html?" + queryString + "&ingredient=bread";
    window.location.href = queryString;
});

$("#tempeh").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "question1.html?" + queryString + "&ingredient=tempeh";
    window.location.href = queryString;
});

$(document).on("click", '.recipeContainer', function (event) {
    console.log(event.target);
    //Gets the parent container class, then gets its title span, then parses the HTML to set the query string
    window.location.href = "recipe.html?title=" + event.target.closest(".recipeContainer").getElementsByClassName("runnerName")[0].innerHTML;
});

$("#fruitsVeggiesButton").on("click", function () {
    queryString += "category=FruitsVeggies";
    window.location.href = 'vegetables.html?' + queryString;
});

$("#grainsButton").on("click", function () {
    queryString += "category=Grains";
    window.location.href = 'grains.html?' + queryString;
});

$("#protienButton").on("click", function () {
    queryString += "category=ProteinNuts";
    window.location.href = 'protein.html?' + queryString;
});

$("#profileButton").on("click", function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            window.location.href = 'profile.html'
        } else {
            window.location.href = 'login.html';
        }
    });
});

$("#searchButton").on("click", function () {
    window.location.href = 'categories.html';
});

$("#homeButton").on("click", function () {
    window.location.href = 'index.html';
});

$("#fresh").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "recipes.html?" + queryString + "&cooked=false";
    window.location.href = queryString;
});

$("#cooked").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "recipes.html?" + queryString + "&cooked=true";
    window.location.href = queryString;
});

$("#checkmarkButton").on("click", function () {
    let url = window.location.pathname;
    if (url == "/categories.html" ||
        url == "/vegetables.html" || url == "/grains.html" || url == "/protein.html") {
        window.location.pathname = "question1.html";
    } else if (url == "/question1.html") {
        window.location.pathname = "/recipes.html"
    }
})