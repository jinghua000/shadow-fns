"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Like `*`
 * 
 * The second parameter multiply the first 
 * 
 * @param {Number} x 
 * @param {Number} e 
 * @return {Number}
 * @since 0.1.0
 * @category Logic, curry2
 * @sign Number -> Number -> Number
 * @see divide
 * @example 
 * 
 * let multiply3 = f.multiply(3)
 * 
 * multiply3(2) // => 6
 * multiply3(3) // => 9
 */
const multiply = (0, _curry.default)((x, e) => e * x);
var _default = multiply;
exports.default = _default;