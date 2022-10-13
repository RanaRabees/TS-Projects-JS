"use strict";
// Task - 43:
exports.__esModule = true;
function car(manufacturer, model) {
    var argument = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        argument[_i - 2] = arguments[_i];
    }
    if (argument) {
        var dict = {
            'Manufacturer': manufacturer,
            'Model': model,
            'Additional_feautures': argument
        };
        return dict;
    }
    else {
        var dict = {
            'Manufacturer': manufacturer,
            'Model': model
        };
        return dict;
    }
    ;
}
;
console.log(car('ROLLS-ROYCE', '2022', 'Metallic-blue', 'Driver Airbag', 'Automatic Climate Control'));
