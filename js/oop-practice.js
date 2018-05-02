/*esvlint env-browser*/
//STEP 1
/*function Cat() {
    "use strict";
}

var Dog = function () {
    "use strict";
};

//STEP 2
var cat1 = new Cat();
var dog1 = new Dog();

//STEP 3
function Animals() {
    "use strict";
    window.console.log("The Animal has been created");
}

//STEP 4
function Animals(animal) {
    "use strict";
    this.animal = animal;
    window.console.log(this.animal + "has been created");
}
*/

// STEP 5
/*function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
    
    //STEP 6
    var x;
    for (x in this) {
        window.console.log(this[x]);
    }
}

//STEP 7
Animal.prototype.speak = function () {
    "use strict";
    if (this.type === "dog") {
        window.console.log("the" + this.color + "dog is barking!");
    } else {
        if (this.type === "cat") {
            window.console.log("the" + this.color + "cat is meowing!");
        }
    }
    var myAnimal = new Animal("Dog", "Dachsund", "Black", "5 inches", "20 inches");
    myAnimal.speak();
    */
    
//STEP 8
/*function Animal(type, breed, color, height, length) {
    "use strict";
    var type = type;
    var breed = breed;
    var color = color;
    var height = height;
    var length = length;

var checkType = function () {
    if (type === "dog") {
        return "dog";
        
    } else {
        if (type === "cat") {
            return "cat";
        }
    }
};
    this.speak = function () {
        var animal = checkType();
        window.console.log("the" + animal + "has a noise");
};
}
*/


//STEP 9

/*String.prototype.findWords = function (word) {
    "use strict";
    var strtext = this;

    var times = 0, pos = 0;
    var l = strtext.length;
    do {
        pos = strtext.indexOf(word);
        if (pos !== -1) {
                times = times + 1;  
                strtext = strtext.slice(pos + 1, l)
            }         
    } while (pos !== -1);

  

    window.alert("The " + word + " was " + times + " times");
};

"My dogs name is Toby. Toby is 4 years old".findWords("Toby");
*/














