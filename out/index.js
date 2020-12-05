"use strict";
exports.__esModule = true;
var data_1 = require("./data");
var array = data_1.data.split('\n');
var result = 0;
array.forEach(function (x, i) {
    array.forEach(function (y, j) {
        array.forEach(function (z, k) {
            var intx = parseInt(x);
            var inty = parseInt(y);
            var intz = parseInt(z);
            if (i !== j &&
                j !== k &&
                ((intx + inty + intz) === 2020)) {
                result = intx * inty * intz;
            }
        });
    });
});
console.log(result);
