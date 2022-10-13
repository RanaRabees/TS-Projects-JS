"use strict";
// Task - 30:
exports.__esModule = true;
var current_users = ['Ahmad', 'Rana', 'Muhammad', 'Reebaal', 'HUSSAIN'];
var lower1 = current_users.map(function (a) { return a.toLowerCase(); });
// The function is completely case insensitive,,,
var new_users = ['Imran', 'Arslan', 'Hussain', 'Rabees', 'AHMAD'];
var lower2 = new_users.map(function (a) { return a.toLowerCase(); });
// The function is completely case insensitive,,,
for (var i = 0; i < lower2.length; i++) {
    if (lower1.indexOf(lower2[i]) >= 0) {
        console.log("".concat(lower2[i], " this username is not available, enter a new number"));
    }
    else {
        console.log("".concat(lower2[i], " this username is available."));
    }
}
;
