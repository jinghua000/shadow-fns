"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Like `/`
 * 
 * The second parameter divide the first 
 * 
 * @param {Number} x 
 * @param {Number} e 
 * @return {Number}
 * @category Logic, curried
 * @sign Number -> Number -> Number
 * @see multiply
 * @example 
 * 
 * let divide3 = f.divide(3)
 * 
 * divide3(9) // => 3
 * divide3(12) // => 4
 */
const divide = (0, _curry.default)((x, e) => e / x);
var _default = divide;
exports.default = _default;