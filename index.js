"use strict";
exports.__esModule = true;
var data_1 = require("./data");
var rows = data_1.data.split('\n');
var validatad = rows
    .map(function (x) {
    var split = x.split(': ');
    var rule = split[0];
    var ruleSplit = rule.split(' ');
    var password = split[1];
    var minMaxString = ruleSplit[0]; // 1-2
    var min = parseInt(minMaxString.split('-')[0]);
    var max = parseInt(minMaxString.split('-')[1]);
    var letter = ruleSplit[1]; // a
    var regexp = new RegExp("[^" + letter + "]", 'g');
    var letterOccurrance = password.replace(regexp, '').length;
    /*console.dir({
      password,
      min,
      max,
      letter,
      regexp,
      letterOccurrance
    });*/
    return (letterOccurrance <= max) && (letterOccurrance >= min);
});
console.log('valid:');
console.log(validatad.filter(function (x) { return !!x; }).length);
console.log('of:');
console.log(rows.length);
