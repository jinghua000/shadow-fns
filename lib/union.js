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
 * Select unique elements either exist in one array or another
 * 
 * Order from second to first
 * 
 * @param {Array} arrx 
 * @param {Array} arr
 * @return {Array}
 * @category Array, curried
 * @sign Array -> Array -> Array
 * @see difference, intersection, uniq
 * @example
 * 
 * let arr1 = [1, 2, 3]
 * let arr2 = [2, 2, 3, 4]
 * 
 * f.union(arr1)(arr2) // => [2, 3, 4, 1]
 */
const union = (0, _curry.default)((arrx, arr) => (0, _uniq.default)([].concat(arr, arrx)));
var _default = union;
exports.default = _default;