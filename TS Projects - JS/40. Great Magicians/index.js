"use strict";
// Task - 40:
exports.__esModule = true;
var magician = ['Rana', 'Muhammad', 'Reebaal', 'Hussain'];
function make_great() {
    for (var i = 0; i < magician.length; i++) {
        magician[i] += ' the great';
    }
}
;
console.log(make_great());
function show_magicians(name) {
    for (var i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
}
;
console.log(show_magicians(magician));
