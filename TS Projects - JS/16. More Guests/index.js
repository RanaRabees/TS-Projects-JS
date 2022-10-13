"use strict";
// Task - 16:
exports.__esModule = true;
var guests = ["GrandMother", "Mother", "Father"];
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", I would like to invite you for the dinner tonight kindly spare us some time."));
}
console.log("\nOops!!!!!! ".concat(guests[2], ", can't join us for dinner today cause they are busy in meeting tonight.....\n"));
guests[2] = "Sister";
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", I would like to invite you for the dinner tonight kindly spare us some time."));
}
console.log("\nWOW!!!!!! ".concat(guests[0], ", ").concat(guests[1], ", ").concat(guests[2], ", gladly we found an amazing dinner table so we could invite more peoples to join the fun...\n"));
guests.splice(0, 0, "Brother");
guests.splice(2, 0, "Uncle");
// NOTE:
// Sometimes you need to append one or more new values at the end of an array.
// In this situation the push() method is what you need. 
// This method accepts an unlimited number of arguments, 
// and you can add as many elements as you want at the end of the array.
// So the "push()" method is used instead of "append()"....
guests.push("Aunty");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", I would like to invite you for the dinner tonight kindly spare us some time."));
}
