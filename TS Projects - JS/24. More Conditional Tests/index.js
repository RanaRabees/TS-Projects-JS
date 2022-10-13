"use strict";
// Task - 24:
exports.__esModule = true;
var my_name = "Reebaal";
var behaviour = "He is a good boy";
console.log("Is Reebaal a good boy?");
console.log(my_name == behaviour);
// "TRUE:"
var my_city = "My city is very beautiful...";
var my_country = "My city is very beautiful...";
console.log("Is Pakistan a beautiful country?");
console.log(my_city == my_country);
// • Tests using the lower case function
// "FALSE:"
var name1 = "Reebaal";
var name2 = "rEEbaAL";
console.log("Are both my names?");
console.log(name1.toLowerCase() == name2);
// "TRUE:"
var name3 = "Reebaal";
var name4 = "rEEbaAL";
console.log("Are both my names?");
console.log(name1.toLowerCase() == name2.toLowerCase());
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// "TRUE:"
var num1 = 12 * 12;
var num2 = 200 / 2 + 84 - 40;
console.log("Are both numbers equal?");
console.log(num1 == num2);
// "FALSE:"
var num3 = 64;
var num4 = 418;
console.log("Is num3 greater than num4?");
console.log(num3 >= num4);
// • Tests using "and" and "or" operators
// "FALSE:"
var country1 = "Pakistan";
var country2 = "Turkey";
var country3 = "China";
var country4 = "Korea";
console.log("Do all countries have same culture?");
console.log(country1 && country2 == country3 && country4);
// "True:"
var country5 = "China";
var country6 = "Turkey";
var country7 = "China";
var country8 = "Turkey";
console.log("All the countries are friend?");
console.log((country5 == country7 || country6 == country8));
// • Test whether an item is in a array:
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Is this item is present in array?");
console.log(arr1[1] in arr1);
// • Test whether an item is not in a array
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Is this item is present in array?");
console.log(arr1[12] in arr1);
