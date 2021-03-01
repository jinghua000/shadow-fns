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
 * Select unique elements both exist in one array and another
 * 
 * Order from second to first
 * 
 * Use `Array.prototype.includes`
 * 
 * **NOTE:** Shallow Copy
 *  
 * @param {Array} arrx 
 * @param {Array} arr
 * @return {Array}
 * @since 0.1.0
 * @category Array, curry2
 * @sign Array -> Array -> Array
 * @see difference, union, uniq
 * @example
 * 
 * const arr1 = [1, 3, 5]
 * const arr2 = [7, 5, 3]
 * 
 * f.intersection(arr1)(arr2) // => [5, 3]
 */
const intersection = (0, _curry.default)((arrx, arr) => (0, _uniq.default)([].concat(arr)).filter(e => arrx.includes(e)));
var _default = intersection;
exports.default = _default;