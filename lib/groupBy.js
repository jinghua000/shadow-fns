"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

var _tap = _interopRequireDefault(require("./tap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Group the array by the supplied function
 * 
 * Return a object, function's returns as key, 
 * satisfied elements as array values
 * 
 * @param {Function} fn 
 * @param {Array} arr
 * @return {Object}
 * @since 0.1.0
 * @category Array, curry2
 * @sign (a -> b) -> [a] -> { b: [a] }
 * @example
 * 
 * let arr = [1, 2, 3, 4, 5]
 * let group = f.groupBy(e => e < 3 ? 'small' : 'big')
 * 
 * group(arr)
 * // => { small: [1, 2], big: [3, 4, 5] }
 */
const groupBy = (0, _curry.default)((fn, arr) => (0, _tap.default)(obj => arr.forEach(e => (0, _tap.default)(cat => (obj[cat] = obj[cat] || []).push(e), fn(e))), {}));
var _default = groupBy;
exports.default = _default;