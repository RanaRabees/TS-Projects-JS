"use strict";
// Task - 35:
exports.__esModule = true;
function make_shirt1(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love JavaScript"; }
    return "The size of your shirt is ".concat(size, " and the text written on it is ").concat(text);
}
console.log(make_shirt1());
// By default Medium T-shirts:
function make_shirt2(size, text) {
    if (size === void 0) { size = "medium"; }
    if (text === void 0) { text = "I love JavaScript"; }
    return "The size of your shirt is ".concat(size, " and the text written on it is ").concat(text);
}
console.log(make_shirt2());
// By User's input T-shirts:
function make_shirt3(size, text) {
    return "The size of your shirt is ".concat(size, " and the text written on it is ").concat(text);
}
console.log(make_shirt3("small", "Rana Reebaal"));
