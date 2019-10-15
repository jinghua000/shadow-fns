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
 * @category Tools, curried
 * @sign Number -> (a -> b) -> (a -> b)
 * @example
 * 
 * let id3 = f.times(3, f.identity)
 * 
 * id3(1) // => [1, 1, 1]
 */
const times = (0, _curry.default)((n, fn) => (...args) => {
  let i = 0;
  let ret = [];

  while (i++ < n) {
    ret.push(fn(...args));
  }

  return ret;
});
var _default = times;
exports.default = _default;