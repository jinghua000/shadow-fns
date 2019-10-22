"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Convert the Object to Array like `[[key, value], ...]`.
 * 
 * Only support own property,
 * and not support Symbol keys.
 * 
 * @param {Object} obj 
 * @return {Array}
 * @since 0.1.4
 * @category Object
 * @sign ({ k: v, ... }) -> [[k, v], ...]
 * @see fromPairs
 * @example
 * 
 * f.toPairs({ a: 1, b: 2 }) // => [['a', 1], ['b', 2]]
 */
const toPairs = obj => Object.keys(obj).map(k => [k, obj[k]]);

var _default = toPairs;
exports.default = _default;