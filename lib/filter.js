"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just like `Array.prototype.filter`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * 
 * @param {Function} fn
 * @param {Array} [thisArg]
 * @param {Array} data
 * @return {Array}
 * @category Native
 * @sign (a -> Boolean) -> [a] -> [a]
 * @see reject
 * @example
 *    
 * let greaterThan3 = f.filter(f.gt(3))
 * let arr = [1, 2, 3, 4, 5]
 * 
 * greaterThan3(arr) // => [4, 5]
 */
const filter = (0, _nativeSelfFn2.default)('filter');
var _default = filter;
exports.default = _default;