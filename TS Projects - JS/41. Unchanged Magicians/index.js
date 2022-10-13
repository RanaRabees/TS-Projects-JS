"use strict";
// Task - 41:
exports.__esModule = true;
var magician = ['Rana', 'Muhammad', 'Reebaal', 'Hussain'];
var magician_copy = ['Rana', 'Muhammad', 'Reebaal', 'Hussain'];
function make_great() {
    for (var i = 0; i < magician_copy.length; i++) {
        magician_copy[i] += ' the great';
    }
}
;
console.log(make_great());
// This is the new array stored in a new variable
var new_array = magician_copy;
function show_magicians(name) {
    for (var i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
}
;
// NOTE:
// This is the original array
console.log(show_magicians(magician));
// NOTE:
// This is the array added with the phrase "the great"
console.log(show_magicians(new_array));
