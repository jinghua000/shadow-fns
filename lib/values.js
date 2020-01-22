"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Equal with `Object.values`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
 * 
 * @param {Object} obj 
 * @return {Array}
 * @since 0.1.0
 * @category Native
 * @sign Object -> Array
 * @see keys
 * @example
 * 
 * const obj = { a: 1, b: 2, c: 3 }
 * 
 * f.values(obj) // => [1, 2, 3]
 */
const values = Object.values;
var _default = values;
exports.default = _default;