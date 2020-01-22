"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Like `<=`
 * 
 * Check the second parameter is less than or equal with the first
 * 
 * @param {*} x 
 * @param {*} e 
 * @return {Boolean}
 * @since 0.1.0
 * @category Logic, curry2
 * @sign a -> a -> Boolean
 * @see gte, lt
 * @example
 * 
 * const lessOrEqual5 = f.lte(5)
 * 
 * lessOrEqual5(6) // => false
 * lessOrEqual5(5) // => true
 * lessOrEqual5(4) // => true
 */
const lte = (0, _curry.default)((x, e) => e <= x);
var _default = lte;
exports.default = _default;