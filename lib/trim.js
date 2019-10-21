"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Just like `String.prototype.trim`
 * 
 * Return a new string
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 * 
 * @param {String} str 
 * @return {String}
 * @since 0.1.0
 * @category Native
 * @sign String -> String
 * @example
 * 
 * let str = ' i have a plan '
 * 
 * f.trim(str) // => 'i have a plan'
 */
const trim = str => str.trim();

var _default = trim;
exports.default = _default;