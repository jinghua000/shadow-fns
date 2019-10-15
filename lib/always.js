"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Always return the first parameter
 * 
 * @param {*} e 
 * @param {*} _
 * @return {*}
 * @category Tools
 * @sign a -> x -> a
 * @see identity
 * @example
 *    
 * let obj = {}
 * 
 * f.always(10)(123) // => 10
 * f.always(10)(null) // => 10
 * f.always(obj)() === obj // => true
 */
const always = e => _ => e;

var _default = always;
exports.default = _default;