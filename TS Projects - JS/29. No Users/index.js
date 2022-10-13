"use strict";
// Task - 29:
exports.__esModule = true;
var user_names = ['admin', 'Rana', 'Muhammad', 'Reebaal', 'Hussain'];
if (user_names[0] == undefined) {
    console.log("We need to find some users...");
}
for (var i = 0; i < user_names.length; i++) {
    if (user_names[i] == 'admin') {
        console.log('Welcome Mr admin! you have some important notification wanna check');
    }
    if (user_names[i] == 'admin') {
        continue;
    }
    else {
        console.log("Hello! ".concat(user_names[i], " Thankyou for logging in to our website... "));
    }
}
;
// NOTE:
// You could add some data to array "user_names" in order to run "else" block,
// Checking whether the empty array function is working fine,,,
user_names = [];
if (user_names[0] == undefined) {
    console.log("We need to find some users...");
}
else {
    console.log("someone here");
}
