"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Deep flatten the array
 * 
 * Return a new array
 * 
 * **NOTE:** Shallow copy
 * 
 * @param {Array} arr 
 * @return {Array}
 * @category Array
 * @sign Array -> Array
 * @example
 * 
 * let arr = [1, [2], [[3, 4], 5]]
 * 
 * f.flatten(arr) // => [1, 2, 3, 4, 5]
 */
const flatten = arr => arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);

var _default = flatten;
exports.default = _default;