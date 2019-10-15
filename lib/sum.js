"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Sum the array
 * 
 * Use `Array.prototype.reduce`
 * 
 * @param {Array} arr 
 * @return {*}
 * @category Array
 * @sign [a] -> a
 * @example
 * 
 * f.sum([1, 2, 3, 4]) // => 10
 * f.sum(['a', 'b', 'c', 'd']) // => abcd
 */
const sum = arr => arr.reduce((acc, cur) => acc += cur);

var _default = sum;
exports.default = _default;