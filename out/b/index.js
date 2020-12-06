"use strict";
exports.__esModule = true;
exports.validators = void 0;
var a_1 = require("../a");
var dataB_1 = require("../dataB");
var validateBYR = function (value) {
    var number = parseInt(value);
    var valid = (number >= 1920 &&
        number <= 2002);
    return valid;
};
var validateIYR = function (value) {
    var number = parseInt(value);
    var valid = (number >= 2010 &&
        number <= 2020);
    return valid;
};
var validateEYR = function (value) {
    var number = parseInt(value);
    var valid = (value.length === 4 &&
        number >= 2020 &&
        number <= 2030);
    return valid;
};
var validateHGT = function (value) {
    if (value.indexOf('cm') !== -1) {
        var number = parseInt(value.split('cm')[0]);
        var valid = (number >= 150 &&
            number <= 193);
        return valid;
    }
    if (value.indexOf('in') !== -1) {
        var number = parseInt(value.split('in')[0]);
        var valid = (number >= 59 &&
            number <= 76);
        return valid;
    }
    return false;
};
var validateHCL = function (value) {
    var valid = (value.indexOf('#') === 0 &&
        /^[\da-f]{6}$/g.test(value.split('#')[1]));
    return valid;
};
var validateECL = function (value) {
    var valid = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].some(function (x) { return x === value; });
    return valid;
};
var validatePID = function (value) {
    var valid = /^\d{9}$/.test(value);
    return valid;
};
exports.validators = {
    'byr': validateBYR,
    'iyr': validateIYR,
    'eyr': validateEYR,
    'hgt': validateHGT,
    'hcl': validateHCL,
    'ecl': validateECL,
    'pid': validatePID
};
console.log('Passports valid: ', a_1.validatePassports(dataB_1.data, exports.validators));
