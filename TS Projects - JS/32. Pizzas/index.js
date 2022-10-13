"use strict";
// Task - 32:
exports.__esModule = true;
var fav_pizza = ['Veggie Pizza', 'Pepperoni Pizza', 'Margherita Pizza'];
for (var i = 0; i < fav_pizza.length; i++) {
    if (fav_pizza[i] == fav_pizza[0])
        console.log("".concat(fav_pizza[0], " is the pizza that i like the most"));
    else if (fav_pizza[i] == fav_pizza[1])
        console.log("".concat(fav_pizza[1], " is different among all of others"));
    else if (fav_pizza[i] == fav_pizza[2])
        console.log("".concat(fav_pizza[2], " has a unique taste"));
}
;
console.log('\nPepperoni Pizza is my favourite pizza.\n', 'I think its taste is unique and best among all of the other pizzas.\n', 'Personally I like cheese topping with black peppers.\n', 'Its a really great combination');
