"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Check the element is `undefined` or `null`
 * 
 * @param {*} e
 * @return {Boolean} 
 * @category Tools
 * @sign x -> Boolean
 * @see isExist, isEmpty
 * @example
 * 
 * f.isNil(null) // => true
 * f.isNil(undefined) // => true
 * f.isNil('undefined') // => false
 */
const isNil = e => e === undefined || e === null;

var _default = isNil;
exports.default = _default;