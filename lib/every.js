"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just like `Array.prototype.every`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 * 
 * @param {Function} fn 
 * @param {Array} [thisArg] 
 * @param {Array} data
 * @return {Boolean}
 * @since 0.1.0
 * @category Native
 * @sign (a -> Boolean) -> [a] -> Boolean
 * @see some, none
 * @example
 * 
 * const everyGreaterThan3 = f.every(f.gt(3))
 * 
 * everyGreaterThan3([2, 3, 4]) // => false
 * everyGreaterThan3([4, 5, 6]) // => true
 */
const every = (0, _nativeSelfFn2.default)('every');
var _default = every;
exports.default = _default;