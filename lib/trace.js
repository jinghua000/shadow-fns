"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is a function for debug
 * 
 * Use with function like `f.pipe`
 * 
 * To test what parameters passed in 
 * 
 * @param {String} tag 
 * @param {*} x 
 * @return {*}
 * @since 0.1.0
 * @category Tools, curry2
 * @sign String -> a -> a
 * @example
 * 
 * let add3 = f.pipe(
 *   f.add(1), 
 *   f.trace('what i am?')
 *   f.add(1), 
 *   f.trace('what i am?')
 *   f.add(1), 
 * )
 * 
 * add3(3) 
 * // logs: what i am?, 4
 * // logs: what i am?, 5
 * // => 6
 */
const trace = (0, _curry.default)((tag, x) => {
  console.log(tag, x);
  return x;
});
var _default = trace;
exports.default = _default;