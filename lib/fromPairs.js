"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _merge = _interopRequireDefault(require("./merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert the Array which seems like `[[key, value], ...]` to Object.
 * 
 * If has multiple same keys, use the rightmost one.
 * 
 * @param {Array} arr 
 * @return {Object}
 * @since 0.1.4
 * @category Array
 * @sign [[k, v], ...] -> { k: v, ... }
 * @see toPairs
 * @example
 * 
 * f.fromPairs([['a', 1], ['b', 2], ['c', 3]]) // => { a: 1, b: 2, c: 3 }
 * f.fromPairs([['a', 1], ['b', 2], ['a', 3]]) // => { a: 3, b: 2 }
 */
const fromPairs = arr => (0, _merge.default)(...arr.map(elem => ({
  [elem[0]]: elem[1]
})));

var _default = fromPairs;
exports.default = _default;