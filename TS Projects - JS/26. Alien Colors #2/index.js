"use strict";
// Task - 26:
exports.__esModule = true;
var alien_colour = "Blue";
if (alien_colour == 'green') {
    console.log('Player just earned 5 points for shooting the alien.');
}
else {
    console.log('Player just earned 10 points.');
}
if (alien_colour == 'Blue') {
    console.log(" \"IF\" block ran...");
}
alien_colour = "Red";
if (alien_colour == 'Blue') {
    console.log("Alien colour is changed again...");
}
else {
    console.log("\"ELSE\" block ran...");
}
