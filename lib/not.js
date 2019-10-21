"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Return opposite boolean of the parameter supplied
 * 
 * @param {*} e 
 * @return {Boolean}
 * @since 0.1.0
 * @category Logic
 * @sign x -> Boolean
 * @see opposite
 * @example
 * 
 * f.not(true) // => false
 * f.not(null) // => true
 */
const not = e => !e;

var _default = not;
exports.default = _default;