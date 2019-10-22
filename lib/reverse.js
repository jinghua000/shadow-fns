"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Return a new array with the reverse of the array supplied
 * 
 * And this not like `Array.prototype.reverse`, will not change the origin array
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * 
 * **NOTE:** Shallow copy
 * 
 * @param {*} arr 
 * @return {Array} 
 * @since 0.1.0
 * @category Native
 * @sign [a, b, ..., z] -> [z, ..., b, a]
 * @example
 * 
 * let arr = [1, 2, 3]
 * 
 * f.reverse(arr) // [3, 2, 1]
 */
const reverse = arr => [].concat(arr).reverse();

var _default = reverse;
exports.default = _default;