"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Like `>`
 * 
 * Check the second parameter is greater than the first
 * 
 * @param {*} x 
 * @param {*} e 
 * @return {Boolean}
 * @since 0.1.0
 * @category Logic, curry2
 * @sign a -> a -> Boolean
 * @see lt, gte
 * @example
 * 
 * let greaterThan5 = f.gt(5)
 * 
 * greaterThan5(6) // => true
 * greaterThan5(5) // => false
 * greaterThan5(4) // => false
 */
const gt = (0, _curry.default)((x, e) => e > x);
var _default = gt;
exports.default = _default;