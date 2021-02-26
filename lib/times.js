"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Call the supplied function for `n` times
 * and push the returns to an array
 * 
 * @param {Number} n
 * @param {Function} fn
 * @return {Function}
 * @since 0.1.0
 * @category Tools, curry2
 * @sign Number -> (a -> b) -> (a -> b)
 * @example
 * 
 * const id3 = f.times(3, f.identity)
 * 
 * id3(1) // => [1, 1, 1]
 */
const times = (0, _curry.default)((n, fn) => (...args) => {
  let i = 0;
  const arr = Array(n);

  while (i < n) {
    arr[i++] = fn(...args);
  }

  return arr;
});
var _default = times;
exports.default = _default;