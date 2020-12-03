"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var rows = data_1.data.split('\n');
var extraxtParams = function (row) {
    var split = row.split(': ');
    var rule = split[0];
    var password = split[1];
    var ruleSplit = rule.split(' ');
    var indicesSting = ruleSplit[0]; // 1-2
    var letter = ruleSplit[1]; // a
    var firstIndex = parseInt(indicesSting.split('-')[0]);
    var secondIndex = parseInt(indicesSting.split('-')[1]);
    return {
        firstIndex: firstIndex - 1,
        secondIndex: secondIndex - 1,
        letter: letter,
        password: password
    };
};
var getStingLetterOfIndex = function (i, p) { return p.slice(i, i + 1); };
var validatad = rows
    .map(function (x) {
    var _a = extraxtParams(x), firstIndex = _a.firstIndex, secondIndex = _a.secondIndex, letter = _a.letter, password = _a.password;
    var firstMatch = getStingLetterOfIndex(firstIndex, password) === letter;
    var secondMatch = getStingLetterOfIndex(secondIndex, password) === letter;
    var res = (!!firstMatch || !!secondMatch) && (firstMatch !== secondMatch);
    console.log(extraxtParams(x));
    console.log(res);
    return res;
});
console.log('valid:');
console.log(validatad.filter(function (x) { return !!x; }).length);
console.log('of:');
console.log(rows.length);
//# sourceMappingURL=index.js.map