"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Like `+`
 * 
 * The second parameter add the first 
 * 
 * @param {*} x 
 * @param {*} e
 * @return {Number|String}
 * @category Logic, curried
 * @sign a -> a -> a
 * @see subtract
 * @example
 * 
 * f.add(1)(2) // => 3
 * f.add('a')('b') // => 'ba'
 * f.add(undefined)(undefined) // => NaN
 */
const add = (0, _curry.default)((x, e) => e + x);
var _default = add;
exports.default = _default;