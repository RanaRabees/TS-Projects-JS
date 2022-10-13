"use strict";
// Task - 36:
exports.__esModule = true;
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(city, " is a beautiful city of ").concat(country);
}
console.log(describe_city("Islamabad"));
console.log(describe_city("Karachi"));
// NOTE:
// Shanghai is not in our default country,,,
console.log(describe_city("Shanghai"));
