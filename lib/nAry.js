"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pass the first `n` parameters to supplied function and ignore others
 * 
 * @param {Number} n 
 * @param {Function} fn
 * @return {Function}
 * @since 0.1.0
 * @category Function, curry2
 * @see unary, binary
 * @sign Number -> ((a, b, ..., z) -> result) -> ((a, b, ..., n) -> result)
 * @example
 * 
 * let printThree = (a, b, c) => [a, b, c]
 * printThree(1, 2, 3) // => [1, 2, 3]
 * 
 * let printTwo = f.nAry(2)(printThree)
 * printTwo(1, 2, 3) // => [1, 2, undefined]
 */
const nAry = (0, _curry.default)((n, fn) => (...args) => fn(...args.slice(0, n)));
var _default = nAry;
exports.default = _default;