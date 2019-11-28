var queryString = "";

$("#potato").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "recipes.html?" + queryString + "&ingredient=potato";
    window.location.href = queryString;
});

$("#carrot").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "recipes.html?" + queryString + "&ingredient=carrot";
    window.location.href = queryString;
});

$("#apple").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "recipes.html?" + queryString + "&ingredient=apple";
    window.location.href = queryString;
});

$("#bread").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "recipes.html?" + queryString + "&ingredient=bread";
    window.location.href = queryString;
});

$("#pasta").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "recipes.html?" + queryString + "&ingredient=pasta";
    window.location.href = queryString;
});

$("#oats").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "recipes.html?" + queryString + "&ingredient=oats";
    window.location.href = queryString;
});

$("#tofu").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "recipes.html?" + queryString + "&ingredient=tofu";
    window.location.href = queryString;
});

$("#nuts").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "recipes.html?" + queryString + "&ingredient=bread";
    window.location.href = queryString;
});

$("#tempeh").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "recipes.html?" + queryString + "&ingredient=tempeh";
    window.location.href = queryString;
});

$("#fruitsVeggiesBackground").on("click", function () {
    queryString += "category=vegetables";
    window.location.href = 'vegetables.html?' + queryString;
});

$("#grainsButton").on("click", function () {
    queryString += "category=grains";
    window.location.href = 'grains.html?' + queryString;
});

$("#protienButton").on("click", function () {
    queryString += "category=protien";
    window.location.href = 'protien.html?' + queryString;
});

$("#profileButton").on("click", function () {
    window.location.href = 'profile.html';
});

$("#searchButton").on("click", function () {
    window.location.href = 'categories.html';
});

$("#homeButton").on("click", function () {
    window.location.href = 'home.html';
});