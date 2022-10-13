"use strict";
// Task - 42:
exports.__esModule = true;
function toppping() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log(["".concat(items, "!")]);
        break;
    }
}
toppping('cheese', ' black-peppers', ' munchkins');
toppping('cheese', ' black-peppers', ' munchkins', ' red-chilli', ' crunches');
toppping('cheese', ' black-peppers');
