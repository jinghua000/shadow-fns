"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Return the first element of the data
 * 
 * @param {String|Array} list
 * @return {*}
 * @since 0.1.0
 * @category Tools
 * @sign String -> String 
 * @sign [a] -> a
 * @see last, nth
 * @example
 * 
 * const str = 'abcdefg'
 * f.first(str) // => a
 * 
 * const arr = [1, 2, 3, 4, 5]
 * f.first(arr) // => 1
 */
const first = list => list[0];

var _default = first;
exports.default = _default;