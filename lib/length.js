"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Read the `length` property of supplied parameter
 * 
 * @param {*} e 
 * @return {Number}
 * @category Tools
 * @sign x -> Number
 * @example
 * 
 * f.length([1, 2, 3]) // => 3
 * f.length('abc') // => 3
 */
const length = e => e.length;

var _default = length;
exports.default = _default;