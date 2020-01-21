"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just like the `concat` method of `Array.prototype` and `String.prototype`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat  
 * 
 * @param {...(Array|String)} args
 * @param {Array|String} data
 * @return {Array|String}
 * @since 0.1.0
 * @category Native
 * @sign ...a -> a -> a
 * @example
 * 
 * const str = 'i have'
 * f.concat(' a', ' plan')(str) // => 'i have a plan'
 * 
 * const arr = [1, 2, 3]
 * f.concat(4, [5])(arr) // => [1, 2, 3, 4, 5]
 */
const concat = (0, _nativeSelfFn2.default)('concat');
var _default = concat;
exports.default = _default;