"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Apply the arguments to the supplied function
 * 
 * @param {...*} args 
 * @param {Function} fn
 * @return {*}
 * @since 0.1.0
 * @category Function
 * @sign ...x -> (...x -> a) -> a
 * @example
 * 
 * const fn1 = (...args) => args
 * const fn2 = (...args) => f.sum(args)
 * const applyTo = f.applyTo('a', 'b', 'c')
 *    
 * applyTo(fn1) // => ['a', 'b', 'c']
 * applyTo(fn2) // => 'abc'
 */
const applyTo = (...args) => fn => fn(...args);

var _default = applyTo;
exports.default = _default;