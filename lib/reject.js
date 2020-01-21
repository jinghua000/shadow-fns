"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

var _opposite = _interopRequireDefault(require("./opposite"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Opposite to `Array.prototype.filter`
 * 
 * Only support first parameter
 * 
 * @param {Function} fn 
 * @param {Array} arr
 * @return {Array}
 * @since 0.1.0
 * @category Array, curry2
 * @sign (a -> Boolean) -> [a] -> [a]
 * @see filter
 * @example
 * 
 * const notGreaterThan3 = f.reject(f.gt(3))
 * const arr = [1, 2, 3, 4, 5]
 * 
 * notGreaterThan3(arr) // => [1, 2, 3]
 */
const reject = (0, _curry.default)((fn, arr) => arr.filter((0, _opposite.default)(fn)));
var _default = reject;
exports.default = _default;