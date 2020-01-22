"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Pass the arguments and return a new equivalent function
 * which will delay to invoked until it needs
 * 
 * It is the special case of `f.partial`
 * 
 * @param {Function} fn 
 * @param {*} args
 * @return {Function}
 * @since 0.1.0
 * @category Function
 * @sign ((a, b, ..., z) -> res) -> (a, b, ..., z) -> () -> res
 * @see partial, partialRight
 * @example
 * 
 * const sum = (a, b, c) => a + b + c
 * const waitSum = f.thunkify(sum)('a', 'b', 'c')
 * 
 * waitSum() // => 'abc'
 */
const thunkify = fn => (...args) => () => fn(...args);

var _default = thunkify;
exports.default = _default;