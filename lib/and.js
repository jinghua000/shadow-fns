"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Like `&&`
 * 
 * Return the second if the second parameter is not true
 * 
 * Return the first if the second parameter is true
 * 
 * @param {*} x
 * @param {*} e
 * @return {*}
 * @since 0.1.0
 * @category Logic, curry2
 * @sign a -> b -> b | a
 * @see or
 * @example
 * 
 * f.and(true)(false) // => false
 * f.and(10)(20) // => 10
 * f.and('aaa')(0) // => 0
 */
const and = (0, _curry.default)((x, e) => e && x);
var _default = and;
exports.default = _default;