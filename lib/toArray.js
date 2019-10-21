"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * If the parameter is array return a new shallow copy array
 * 
 * If not, return a array with it
 * 
 * @param {*} data 
 * @return {Array}
 * @since 0.1.0
 * @category Tools
 * @sign a -> [a]
 * @sign [a] -> [a]
 * @example
 * 
 * f.toArray('hello') // => ['hello']
 * f.toArray(['hello']) // => ['hello']
 */
const toArray = data => Array.isArray(data) ? [].concat(data) : [data];

var _default = toArray;
exports.default = _default;