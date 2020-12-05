"use strict";
exports.__esModule = true;
exports.countTrees = void 0;
var data_1 = require("./data");
var checkHitRow = function (move, row, rowIndex) {
    var movesMadeDown = rowIndex + 1;
    var accStrayRight = movesMadeDown * move.right;
    var colIndex = accStrayRight; // index starts with 1
    return row.charAt(colIndex) === '#' ? 1 : 0;
};
var countTrees = function (move, slope) {
    var slopeLength = slope.length;
    var slopeWidth = slope[0].length;
    var widthNeeded = slopeLength / move.down * move.right;
    var extendedSlope = slope;
    if (slopeWidth < widthNeeded) {
        var _loop_1 = function (i) {
            var charFrom = i - slopeWidth;
            extendedSlope = extendedSlope.map(function (x) { return x + x.charAt(charFrom); });
        };
        for (var i = slopeWidth; i <= widthNeeded; i++) {
            _loop_1(i);
        }
    }
    var hits = extendedSlope
        .slice(move.down)
        .filter(function (_, i) { return (i + move.down) % move.down === 0; })
        .reduce(function (acc, current, index) {
        return acc + checkHitRow(move, current, index);
    }, 0);
    return hits;
};
exports.countTrees = countTrees;
var testSlopeMoves = [
    { right: 1, down: 1 },
    { right: 3, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 },
];
var results = testSlopeMoves.reduce(function (acc, curr) {
    return acc * exports.countTrees(curr, data_1.data.split('\n'));
}, 1);
console.log("Results: " + results);
