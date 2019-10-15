"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Always return `true`
 * 
 * @param {*} _ 
 * @return {Boolean}
 * @category Logic
 * @sign x -> Boolean
 * @see F
 * @example
 * 
 * f.T() // => true
 * f.T(10) // => true
 * f.T(null) // => true
 */
const T = _ => true;

var _default = T;
exports.default = _default;