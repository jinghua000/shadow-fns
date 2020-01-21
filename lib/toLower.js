"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Return a new string
 * 
 * Just like `String.prototype.toLowerCase`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 * 
 * @param {String} str
 * @return {String}
 * @since 0.1.0
 * @category Native
 * @sign String -> String
 * @see toUpper
 * @example
 * 
 * const str = 'ABC'
 * 
 * f.toLower(str) // => 'abc'
 */
const toLower = str => str.toLowerCase();

var _default = toLower;
exports.default = _default;