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
 * @category Function
 * @sign ...x -> (...x -> a) -> a
 * @example
 * 
 * let fn1 = (...args) => args
 * let fn2 = (...args) => f.sum(args)
 * let applyTo = f.applyTo('a', 'b', 'c')
 *    
 * applyTo(fn1) // => ['a', 'b', 'c']
 * applyTo(fn2) // => 'abc'
 */
const applyTo = (...args) => fn => fn(...args);

var _default = applyTo;
exports.default = _default;