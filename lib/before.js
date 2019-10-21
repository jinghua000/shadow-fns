"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Merge a function to the supplied function and return a new function
 * 
 * When call the new function,
 * first call the `fnx` then call the `fn`
 * with the same arguments
 * 
 * New function's returns same as the origin function
 * 
 * @param {Function} fnx - Before function
 * @param {Function} fn - Origin function
 * @return {Function}
 * @since 0.1.0
 * @category Function, curried
 * @sign (...x -> a) -> (...x -> b) -> (...x -> b)
 * @see after
 * @example
 * 
 * let fn = () => console.log('i am coming')
 * let fnx = () => console.log('i am before')
 * 
 * fn = f.before(fnx)(fn)
 * 
 * fn()
 * // logs: i am before
 * // logs: i am coming
 */
const before = (0, _curry.default)((fnx, fn) => (...args) => {
  fnx(...args);
  return fn(...args);
});
var _default = before;
exports.default = _default;