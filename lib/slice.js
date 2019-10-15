"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Like `slice` method of `Array.prototype` and `String.prototype`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice  
 * 
 * @param {Number} [begin]
 * @param {Number} [end]
 * @param {Array|String} data
 * @return {Array|String}
 * @category Native
 * @sign (Number, Number) -> a -> a
 * @example
 *    
 * let slice2 = f.slice(2, 4)
 * 
 * slice2([1, 2, 3, 4, 5]) // => [3, 4]
 * slice2('abced') // => 'ce'
 */
const slice = (0, _nativeSelfFn2.default)('slice');
var _default = slice;
exports.default = _default;