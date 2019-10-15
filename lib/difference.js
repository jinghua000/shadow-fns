"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

var _uniq = _interopRequireDefault(require("./uniq"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return a new uniq array
 * 
 * Select unique elements exist in one array and not in another 
 * 
 * Order from second to first
 * 
 * Use `Array.prototype.includes`
 * 
 * @param {Array} arrx 
 * @param {Array} arr
 * @return {Array}
 * @category Array, curried
 * @sign Array -> Array -> Array
 * @see intersection, union, uniq
 * @example
 * 
 * let arr1 = [1, 3, 5]
 * let arr2 = [3, 5, 7]
 * 
 * f.difference(arr1)(arr2) // => [7, 1]
 */
const difference = (0, _curry.default)((arrx, arr) => (0, _uniq.default)([].concat(arr, arrx).filter(e => !arr.includes(e) || !arrx.includes(e))));
var _default = difference;
exports.default = _default;