"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Like `||`
 * 
 * Return the second if the second parameter is true
 * 
 * Return the first if the second parameter is not true
 * 
 * @param {*} x
 * @param {*} e
 * @return {*}
 * @category Logic, curried
 * @sign a -> b -> b | a
 * @see and
 * @example
 * 
 * f.or(true)(false) // => true
 * f.or(10)(20) // => 20
 * f.or('aaa')(0) // => 'aaa'
 */
const or = (0, _curry.default)((x, e) => e || x);
var _default = or;
exports.default = _default;