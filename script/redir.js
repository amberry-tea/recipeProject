var queryString = "";

$("#potato").on("click", function () {
    queryString = window.location.href.split("?");
    queryString = queryString[1];
    queryString = "recipes.html?" + queryString + "&ingredient=potato";
    window.location.href = queryString;
});

$("#fruitsVeggiesBackground").on("click", function () {
    queryString += "category=vegetables";
    window.location.href = 'vegetables.html?' + queryString;
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