"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Like `indexOf` method of `Array.prototype` and `String.prototype`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf  
 * 
 * @param {*} args
 * @param {Number} [fromIndex]
 * @param {Array|String} data
 * @return {Number}
 * @category Native
 * @sign x -> a -> Number
 * @see lastIndexOf
 * @example
 * 
 * let findIndexA = f.indexOf('a')
 * 
 * findIndexA('abcabc') // => 0
 * findIndexA(['b', 'c', 'a']) // => 2
 * findIndexA(['b', 'c', 'd']) // => -1
 */
const indexOf = (0, _nativeSelfFn2.default)('indexOf');
var _default = indexOf;
exports.default = _default;