let selectedCoffee = "";
let ingredients = [];


// START GAME

document.getElementById("start").onclick = function() {

    document.getElementById("welcome-screen").classList.add("hidden");

    document.getElementById("coffee-screen").classList.remove("hidden");

};


// SALTED CARAMEL LATTE

document.getElementById("latte").onclick = function() {

    selectedCoffee = "Salted Caramel Latte";

    document.getElementById("coffee-screen").classList.add("hidden");

    document.getElementById("making-screen").classList.remove("hidden");

    document.getElementById("selected-coffee").innerHTML =
        "You chose a Salted Caramel Latte ☕";

};


// FRAPPE

document.getElementById("frappe").onclick = function() {

    selectedCoffee = "Frappe";

    document.getElementById("coffee-screen").classList.add("hidden");

    document.getElementById("making-screen").classList.remove("hidden");

    document.getElementById("selected-coffee").innerHTML =
        "You chose a Frappe 🧊";

};


// MILK

document.getElementById("milk").onclick = function() {

    addIngredient("Milk", this);

};


// CARAMEL

document.getElementById("caramel").onclick = function() {

    addIngredient("Caramel", this);

};


// CHOCOLATE

document.getElementById("chocolate").onclick = function() {

    addIngredient("Chocolate", this);

};


// ICE

document.getElementById("ice").onclick = function() {

    addIngredient("Ice", this);

};


// ADD INGREDIENT

function addIngredient(name, button) {

    if (ingredients.includes(name)) {

        ingredients = ingredients.filter(function(item) {
            return item !== name;
        });

        button.classList.remove("selected");

    } else {

        ingredients.push(name);

        button.classList.add("selected");

    }

}


// MAKE COFFEE

document.getElementById("make").onclick = function() {

    if (ingredients.length === 0) {

        document.getElementById("ingredient-message").innerHTML =
            "Choose at least one ingredient! ☕";

        return;
    }


    document.getElementById("making-screen").classList.add("hidden");

    document.getElementById("final-screen").classList.remove("hidden");


    document.getElementById("final-message").innerHTML =
        "You made a " + selectedCoffee +
        " with " + ingredients.join(", ") + "! ☕✨";

};


// PLAY AGAIN

document.getElementById("restart").onclick = function() {

    selectedCoffee = "";

    ingredients = [];

    document.querySelectorAll(".ingredient").forEach(function(button) {
        button.classList.remove("selected");
    });

    document.getElementById("final-screen").classList.add("hidden");

    document.getElementById("welcome-screen").classList.remove("hidden");

};