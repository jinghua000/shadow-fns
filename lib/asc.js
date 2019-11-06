"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * If the first parameter smaller than the second one, return -1,
 * if bigger, return 1,
 * else 0 
 * 
 * Used for sort array in ascending
 * 
 * @param {*} a 
 * @param {*} b 
 * @return {Number}
 * @since 0.1.0
 * @category Logic, curry2
 * @sign a -> a -> Number
 * @see desc, ascend
 * @example
 * 
 * let arr = [3,2,1,4,5]
 * 
 * f.sort(f.asc)(arr) // => [1,2,3,4,5]
 */
const asc = (0, _curry.default)((a, b) => a < b ? -1 : a > b ? 1 : 0);
var _default = asc;
exports.default = _default;