"use strict";
// Task - 33:
exports.__esModule = true;
var animals = ['Horse', 'Dog', 'Cat'];
for (var i = 0; i < animals.length; i++) {
    if (animals[i] == animals[0])
        console.log("".concat(animals[0], " is very powerful and intelligent animal."));
    else if (animals[i] == animals[1])
        console.log("".concat(animals[1], " is a very loyal animal."));
    else if (animals[i] == animals[2])
        console.log("".concat(animals[2], " is very cute and could be a good pet."));
}
;
console.log('\nAll of these animals have many common qualities,\n', 'They all have four legs, and two eyes.\n', 'All of them are human friendly.\n');
