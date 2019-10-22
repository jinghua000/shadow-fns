"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Return a new String
 * 
 * Just like `String.prototype.toUpperCase`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 * 
 * @param {String} str
 * @return {String}
 * @since 0.1.0
 * @category Native
 * @sign String -> String
 * @see toLower
 * @example
 * 
 * let str = 'abc'
 * 
 * f.toUpper(str) // => 'ABC'
 */
const toUpper = str => str.toUpperCase();

var _default = toUpper;
exports.default = _default;