"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pass the `ms` and `fn` to create a new function
 * 
 * When invoke the new function, 
 * `fn` will be invoked,
 * and at most invoke once in `ms` milliseconds
 * 
 * @param {Number} ms 
 * @param {Function} fn
 * @return {Function}
 * @since 0.1.0
 * @category Function, curried
 * @sign Number -> (...x -> a) -> (...x -> a)
 * @see debounce
 * @example
 * 
 * let num = 0
 * let fn = f.throttle(100)(() => num += 1) 
 * 
 * fn()
 * fn()
 * fn()
 * setTimeout(fn, 120)
 * 
 * console.log(num) // logs 1
 * console.log(num) // logs 1
 * console.log(num) // logs 1
 * setTimeout(() => console.log(num), 150) // logs 2 after 150 ms
 */
const throttle = (0, _curry.default)((ms, fn) => {
  let timer = null;
  let result;
  return (...args) => {
    if (timer !== null) return result;
    timer = setTimeout(() => timer = null, ms);
    result = fn(...args);
    return result;
  };
});
var _default = throttle;
exports.default = _default;