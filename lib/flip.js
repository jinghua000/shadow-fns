"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Return a equivalent function and arguments is flipped!
 * 
 * @param {Function} fn 
 * @return {Function}
 * @since 0.1.0
 * @category Function
 * @sign ((a, b, ..., z) -> x) -> ((z, ..., b, a) -> x)
 * @example
 * 
 * let print = (...args) => args
 * let flipPrint = f.flip(print)
 * 
 * print(1, 2, 3) // => [1, 2, 3]
 * flipPrint(1, 2, 3) // => [3, 2, 1]
 */
const flip = fn => (...args) => fn(...[].concat(args).reverse());

var _default = flip;
exports.default = _default;