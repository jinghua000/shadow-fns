"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * If the first parameter smaller than the second one, return 1,
 * if bigger, return -1,
 * else 0 
 * 
 * Used for sort array in descending
 * 
 * @param {*} a 
 * @param {*} b 
 * @return {Number}
 * @since 0.1.0
 * @category Logic, curried
 * @sign a -> a -> Number
 * @see asc, descend
 * @example
 * 
 * let arr = [3,2,1,4,5]
 * 
 * f.sort(f.desc)(arr) // => [5,4,3,2,1]
 */
const desc = (0, _curry.default)((a, b) => a < b ? 1 : a > b ? -1 : 0);
var _default = desc;
exports.default = _default;