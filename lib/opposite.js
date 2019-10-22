"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Return a function and the returns of that is opposite to the function passed
 * 
 * @param {Function} fn 
 * @return {Function}
 * @since 0.1.0
 * @category Function
 * @sign (...x -> result) -> (...x -> !result)
 * @example
 * 
 * let gt3 = f.gt(3)
 * let arr = [1, 2, 3, 4, 5]
 * 
 * arr.filter(gt3) // => [4, 5]
 * arr.filter(f.opposite(gt3)) // => [1, 2, 3]
 */
const opposite = fn => (...args) => !fn(...args);

var _default = opposite;
exports.default = _default;