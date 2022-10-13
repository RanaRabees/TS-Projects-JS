"use strict";
// Task - 18:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var places = ['Shanghai', 'London', 'Paris', 'Madagascar', 'Seoul']; // My array
console.log(places); // Original array
console.log(__spreadArray([], places, true).sort()); //alphabetical order without changing original array
console.log(places); // Original array still same
console.log(__spreadArray([], places, true).sort().reverse()); // Reverse alphabetical order, 
console.log(places); // without changing original array... 
places.reverse(); // reversing the order of original array  
console.log(places); // Original array changed
places.reverse(); //Again reversing the order of original array to become in  
console.log(places); //previous position.
var alpha_ord = places.sort(); // Original array changed in alphabetical order
console.log(alpha_ord);
console.log(places);
var rev_alpha_ord = places.sort().reverse(); // Original array changed in,
console.log(rev_alpha_ord); // reverse  alphabetical order...
console.log(places);
