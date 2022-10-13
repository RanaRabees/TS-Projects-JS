"use strict";
// Task - 25:
exports.__esModule = true;
var alien_color = 'red';
if (alien_color == 'green') {
    console.log("Player just earned 5 Points.");
}
// Passed Version:
if (alien_color === 'red') {
    console.log("The colour is red");
}
// Failed Version:
if (alien_color === 'green') {
    //      No output...
}
