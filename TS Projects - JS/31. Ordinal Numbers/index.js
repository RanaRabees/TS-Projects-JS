"use strict";
// Task  -  31:
exports.__esModule = true;
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < num.length; i++) {
    if (num[i] == 1) {
        console.log(num[i] + 'st');
    }
    else if (num[i] == 2) {
        console.log(num[i] + 'nd');
    }
    else if (num[i] == 3) {
        console.log(num[i] + 'rd');
    }
    else {
        console.log(num[i] + 'th');
    }
}
