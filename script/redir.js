var queryString = "";

// When user clicks on "potato" ingredient option, page is redirected to 
// to questionnaire.
$("#potato").on("click", function () {
    // Gets query parameters of the URL
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    // Adds the query string to the URL
    queryString = "question1.html?" + queryString + "&ingredient=potato";
    window.location.href = queryString;
});

// When user clicks on "carrot" ingredient option, page is redirected to 
// to questionnaire.
$("#carrot").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "question1.html?" + queryString + "&ingredient=carrot";
    window.location.href = queryString;
});

// When user clicks on "apple" ingredient option, page is redirected to 
// to questionnaire.
$("#apple").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "question1.html?" + queryString + "&ingredient=apple";
    window.location.href = queryString;
});

// When user clicks on "bread" ingredient option, page is redirected to 
// to questionnaire.
$("#bread").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "question1.html?" + queryString + "&ingredient=bread";
    window.location.href = queryString;
});

// When user clicks on "pasta" ingredient option, page is redirected to 
// to questionnaire.
$("#pasta").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "question1.html?" + queryString + "&ingredient=pasta";
    window.location.href = queryString;
});

// When user clicks on "oats" ingredient option, page is redirected to 
// to questionnaire.
$("#oats").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "question1.html?" + queryString + "&ingredient=oats";
    window.location.href = queryString;
});

// When user clicks on "tofu" ingredient option, page is redirected to 
// to questionnaire.
$("#tofu").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "question1.html?" + queryString + "&ingredient=tofu";
    window.location.href = queryString;
});

// When user clicks on "nuts" ingredient option, page is redirected to 
// to questionnaire.
$("#nuts").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "question1.html?" + queryString + "&ingredient=bread";
    window.location.href = queryString;
});

// When user clicks on "tempeh" ingredient option, page is redirected to 
// to questionnaire.
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

// When user clicks on "Fruits and Veggies" category option, page is redirected to 
// to ingredient options.
$("#fruitsVeggiesButton").on("click", function () {
    queryString += "category=FruitsVeggies";
    window.location.href = 'vegetables.html?' + queryString;
});

// When user clicks on "Grains" category option, page is redirected to 
// to ingredient options.
$("#grainsButton").on("click", function () {
    queryString += "category=Grains";
    window.location.href = 'grains.html?' + queryString;
});

// When user clicks on "Protein and Nuts" category option, page is redirected to 
// to ingredient options.
$("#protienButton").on("click", function () {
    queryString += "category=ProteinNuts";
    window.location.href = 'protein.html?' + queryString;
});

// When user clicks on profile button, page is redirected to login page
// if they are not logged in or their profile if they are.
$("#profileButton").on("click", function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            window.location.href = 'profile.html'
        } else {
            window.location.href = 'login.html';
        }
    });
});

// Redirects to categories when search button is clicked.
$("#searchButton").on("click", function () {
    window.location.href = 'categories.html';
});

// Redirects to landing page when home button is clicked.
$("#homeButton").on("click", function () {
    window.location.href = 'index.html';
});

// Redirects to recipe results when fresh is chosen.
$("#fresh").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "recipes.html?" + queryString + "&cooked=false";
    window.location.href = queryString;
});

// Redirects to recipe results when cooked is chosen.
$("#cooked").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "recipes.html?" + queryString + "&cooked=true";
    window.location.href = queryString;
});

// If the skip button is clicked, page redirects to all recipes available.
$("#checkmarkButton").on("click", function () {
    let url = window.location.pathname;
    if (url == "/categories.html" ||
        url == "/vegetables.html" || 
        url == "/grains.html" || 
        url == "/protein.html") {
        window.location.pathname = "question1.html";
    } else if (url == "/question1.html") {
        window.location.pathname = "/recipes.html"
    }
})