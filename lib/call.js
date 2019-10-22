"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Pass the supplied arguments to the supplied function.
 * 
 * Similar to `Function.prototype.call`, but without context.
 * 
 * Notice that this function is not curried, 
 * but if supplied function is curried the result can also be curried.
 * 
 * @param {Function} fn 
 * @param {...*} args
 * @return {*}
 * @since 0.1.4
 * @category Function
 * @sign ((...x -> a), ...x) -> a
 * @see apply
 * @example 
 * 
 * f.call(f.add, 1, 2) // => 3
 * f.call(f.add)(1, 2) // => 3
 * f.call(Number, '1') // => 1
 * f.call(Number)('1') // => ERROR!
 */
const call = (fn, ...args) => fn(...args);

var _default = call;
exports.default = _default;