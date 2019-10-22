"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Like `-`
 * 
 * The second parameter subtract the first 
 * 
 * @param {Number} x 
 * @param {Number} e
 * @return {Number}
 * @since 0.1.0
 * @category Logic, curried
 * @sign Number -> Number -> Number
 * @see add
 * @example
 * 
 * f.subtract(3)(1) // => -2
 * f.subtract(3)('a') // => NaN
 */
const subtract = (0, _curry.default)((x, e) => e - x);
var _default = subtract;
exports.default = _default;