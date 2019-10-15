"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Always return `false`
 * 
 * @param {*} _ 
 * @return {Boolean}
 * @category Logic
 * @sign x -> Boolean
 * @see T
 * @example
 * 
 * f.F() // => fasle
 * f.F(10) // => fasle
 * f.F(null) // => fasle
 */
const F = _ => false;

var _default = F;
exports.default = _default;