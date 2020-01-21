"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

var _opposite = _interopRequireDefault(require("./opposite"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Opposite to `Array.prototype.every`
 * 
 * Only support first parameter(Function)
 * 
 * @param {Function} fn
 * @param {Array} arr
 * @return {Boolean}
 * @since 0.1.0
 * @category Array, curry2
 * @sign (a -> Boolean) -> [a] -> Boolean
 * @see every, some
 * @example
 * 
 * const noneGreaterThan3 = f.none(f.gt(3))
 * 
 * noneGreaterThan3([1, 2, 3]) // => true
 * noneGreaterThan3([2, 3, 4]) // => false
 */
const none = (0, _curry.default)((fn, arr) => arr.every((0, _opposite.default)(fn)));
var _default = none;
exports.default = _default;