"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just like `Array.prototype.find`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * 
 * @param {Function} fn
 * @param {Array} [thisArg]
 * @param {Array} data
 * @return {*}
 * @since 0.1.0
 * @category Native
 * @sign (a -> Boolean) -> [a] -> a
 * @see findIndex
 * @example
 * 
 * let firstBiggerThan2 = f.find(f.gt(2))
 * let arr = [2, 3, 4, 5]
 * 
 * firstBiggerThan2(arr) // => 3
 */
const find = (0, _nativeSelfFn2.default)('find');
var _default = find;
exports.default = _default;