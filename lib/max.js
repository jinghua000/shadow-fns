"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Compare the two parameters and return the bigger one 
 * 
 * @param {Number|String} a 
 * @param {Number|String} b 
 * @return {Number|String}
 * @since 0.1.0
 * @category Logic, curry2
 * @sign (a, a) -> a
 * @see min
 * @example
 * 
 * let arr = [1, 3, 10, 4, 9]
 * 
 * arr.reduce(f.max) // => 10
 */
const max = (0, _curry.default)((a, b) => a > b ? a : b);
var _default = max;
exports.default = _default;