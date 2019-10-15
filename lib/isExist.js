"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Check the element is not `undefined` or `null`
 * 
 * @param {*} e
 * @return {Boolean} 
 * @category Tools
 * @sign x -> Boolean
 * @see isNil, isEmpty
 * @example
 * 
 * f.isExist(null) // => false
 * f.isExist(undefined) // => false
 * f.isExist('') // => true
 * f.isExist({}) // => true
 */
const isExist = e => e !== undefined && e !== null;

var _default = isExist;
exports.default = _default;