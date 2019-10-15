"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Call a part of function and return a new function like `f.partial`
 * 
 * But arguments start at right (arguments order still left-to-right)
 * 
 * @param {Function} fn 
 * @param {...*} args
 * @return {Function}
 * @category Function
 * @sign ((a, b, ..., z) -> res) -> (o, p, ..., z) -> (a, b, ..., n) -> res
 * @see partial
 * @example
 * 
 * let sum = (a, b, c) => a + b + c
 * let sumBeforeAB = f.partial(sum)('a', 'b')
 * 
 * sumAB('c') // => 'cab'
 * sumAB('d') // => 'dab'
 */
const partialRight = fn => (...args) => (...args2) => fn(...args2, ...args);

var _default = partialRight;
exports.default = _default;