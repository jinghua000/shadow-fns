"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just like `Array.prototype.findIndex`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 * 
 * @param {Function} fn
 * @param {Array} [thisArg]
 * @param {Array} data
 * @return {Number}
 * @category Native
 * @sign (a -> Boolean) -> [a] -> Number
 * @see find
 * @example
 * 
 * let firstIndexBiggerThan2 = f.findIndex(f.gt(2))
 * let arr = [2, 3, 4, 5]
 * 
 * firstIndexBiggerThan2(arr) // => 1
 */
const findIndex = (0, _nativeSelfFn2.default)('findIndex');
var _default = findIndex;
exports.default = _default;