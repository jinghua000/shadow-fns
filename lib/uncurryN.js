"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Change a curried function to an uncurry equivalent function
 * with `n` arugments
 * 
 * @param {Number} n
 * @param {Function} fn 
 * @return {Function}
 * @since 0.1.0
 * @category Function, curry2
 * @sign Number -> (a -> b -> ... -> n -> result) -> (a, b, ..., n) -> result
 * @see uncurry, curry
 * @example
 * 
 * let add = a => b => c => a + b + c
 * let fn = f.uncurryN(2)(add)
 * 
 * fn('a', 'b')('c') // => 'abc'
 */
const uncurryN = (0, _curry.default)((n, fn) => (...args) => {
  let ret = fn;

  for (let i = 0; i < n; i++) {
    ret = ret(args[i]);
  }

  return ret;
});
var _default = uncurryN;
exports.default = _default;