"use strict";
// Task - 28:
exports.__esModule = true;
var user_names = ['admin', 'Rana', 'Muhammad', 'Reebaal', 'Hussain'];
for (var i = 0; i < user_names.length; i++) {
    if (user_names[i] == 'admin') {
        console.log('Welcome Mr admin! you have some important notification wanna check');
    }
    if (user_names[i] == 'admin') {
        continue;
    }
    else {
        console.log("Hello!! ".concat(user_names[i], " Thankyou for logging in to our website... "));
    }
}
;
