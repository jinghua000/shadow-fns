"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just like `Array.prototype.some`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 * 
 * @param {Function} fn 
 * @param {Array} [thisArg] 
 * @param {Array} data
 * @return {Boolean}
 * @since 0.1.0
 * @category Native
 * @sign (a -> Boolean) -> [a] -> Boolean
 * @see every, none
 * @example
 * 
 * const someGreaterThan3 = f.some(f.gt(3))
 * 
 * someGreaterThan3([2, 3, 4]) // => true
 * someGreaterThan3([1, 2, 3]) // => false
 */
const some = (0, _nativeSelfFn2.default)('some');
var _default = some;
exports.default = _default;