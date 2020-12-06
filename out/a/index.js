"use strict";
exports.__esModule = true;
exports.validatePassports = exports.validatePassport = void 0;
var dataA_1 = require("../dataA");
/**
 * KVPairs seperated by \n and ' '
 * @return [key, value]
 */
var extractKeyValuePairs = function (passport) {
    /**
     * k:1;k:2;k:3
     */
    var structuredPassport = passport
        .replace(new RegExp('\n', 'g'), ';')
        .replace(new RegExp(' ', 'g'), ';')
        .split(';');
    return structuredPassport
        .map(function (x) {
        var keySplit = x.split(':');
        return [keySplit[0], keySplit[1]];
    });
};
var requiredFields = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid'
];
/**
 * Required keys exists and has value.
 * @param passport
 */
var validatePassport = function (passport, validators) {
    var kvPairs = extractKeyValuePairs(passport);
    var allRequiredPresent = requiredFields
        .every(function (x) { return (kvPairs.some(function (y) { return x === y[0]; })); });
    var rulesApplied = kvPairs.map(function (x) {
        return (!!validators && !!validators[x[0]]) ?
            validators[x[0]](x[1]) :
            true;
    });
    var allRulesValid = rulesApplied.every(function (x) { return !!x; });
    return (allRequiredPresent &&
        (!validators || allRulesValid));
};
exports.validatePassport = validatePassport;
var validatePassports = function (passports, validators) { return passports
    .map(function (x) {
    return exports.validatePassport(x, validators);
})
    .filter(function (x) { return !!x; })
    .length; };
exports.validatePassports = validatePassports;
console.log('Valid passports: ' + exports.validatePassports(dataA_1.data));
