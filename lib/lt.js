"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Like `<`
 * 
 * Check the second parameter is less than the first
 * 
 * @param {*} x 
 * @param {*} e 
 * @return {Boolean}
 * @since 0.1.0
 * @category Logic, curried
 * @sign a -> a -> Boolean
 * @see gt, lte
 * @example
 * 
 * let lessThan5 = f.lt(5)
 * 
 * lessThan5(6) // => false
 * lessThan5(5) // => false
 * lessThan5(4) // => true
 */
const lt = (0, _curry.default)((x, e) => e < x);
var _default = lt;
exports.default = _default;