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
 * first call the `fn` then call the `fnx`
 * with the same arguments
 * 
 * New function's returns same as the origin function
 * 
 * @param {Function} fnx - After function
 * @param {Function} fn - Origin function
 * @return {Function}
 * @category Function, curried
 * @sign (...x -> a) -> (...x -> b) -> (...x -> b)
 * @see before
 * @example
 * 
 * let fn = () => console.log('i am coming')
 * let fnx = () => console.log('i am after')
 *    
 * fn = f.after(fnx)(fn)
 * 
 * fn()
 * // logs: i am coming
 * // logs: i am after
 */
const after = (0, _curry.default)((fnx, fn) => (...args) => {
  let result = fn(...args);
  fnx(...args);
  return result;
});
var _default = after;
exports.default = _default;