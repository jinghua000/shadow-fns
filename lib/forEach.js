"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tap = _interopRequireDefault(require("./tap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Similar to `Array.prototype.forEach`
 * 
 * But return the shallow copy of supplied array
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * 
 * **NOTE:** Shallow copy
 * 
 * @param {Function} fn
 * @param {Array} [thisArg]
 * @param {Array} data
 * @return {Array}
 * @since 0.1.0
 * @category Native
 * @sign (a -> x) -> [a] -> [a]
 * @example
 * 
 * const logElems = f.forEach(f.unary(console.log))
 * 
 * logElems([1, 2, 3]) // => [1, 2, 3]
 * // logs: 1
 * // logs: 2
 * // logs: 3
 */
const forEach = (...args) => arr => (0, _tap.default)(_arr => _arr.forEach(...args), [].concat(arr));

var _default = forEach;
exports.default = _default;