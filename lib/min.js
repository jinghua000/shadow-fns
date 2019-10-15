"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Compare the two parameters and return the smaller one 
 * 
 * @param {Number|String} a 
 * @param {Number|String} b 
 * @return {Number|String}
 * @category Logic, curried
 * @sign (a, a) -> a
 * @see max
 * @example
 * 
 * let arr = [1, 3, 10, 4, 9]
 * 
 * arr.reduce(f.min) // => 1
 */
const min = (0, _curry.default)((a, b) => a < b ? a : b);
var _default = min;
exports.default = _default;