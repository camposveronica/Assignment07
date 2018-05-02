/*eslint-env browser*/
var Recipe = function (title, servings, ingridients) {
    "use strict";
    this.title = title;
    this.servings = servings;
    this.ingridients = ingridients;
    this.displayRecipe = function (title, servings, ingridients) {
        var str;
        var i;
        str = title + "\n";
        str = str + "Serves: " + servings + "\n";
        for (i = 0; i < ingridients.length; i += 1) {
            str = str + "-" + ingridients[i] + "\n";
        }
        return str;
    };
};
var myRecipe = new Recipe("Guacamole", "4", ["3 Avocados", "1 Lime"]);
window.console.log(myRecipe.displayRecipe("Guacamole", "4", ["3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Tablespoon Garlic", "1 Pinch Ground Pepper"]));