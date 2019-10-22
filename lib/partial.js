"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Call a part of function and return a new function
 * 
 * Similar to `f.curry`
 * 
 * @param {Function} fn 
 * @param {...*} args
 * @return {Function}
 * @since 0.1.0
 * @category Function
 * @sign ((a, b, ..., z) -> res) -> (a, b, ..., n) -> (o, p, ..., z) -> res
 * @see curry, partialRight
 * @example
 * 
 * let sum = (a, b, c) => a + b + c
 * let sumAB = f.partial(sum)('a', 'b')
 * 
 * sumAB('c') // => 'abc'
 * sumAB('d') // => 'abd'
 */
const partial = fn => (...args) => (...args2) => fn(...args, ...args2);

var _default = partial;
exports.default = _default;