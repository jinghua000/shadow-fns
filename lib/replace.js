"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just like `String​.prototype​.replace`
 * 
 * Will not change supplied string
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 * 
 * @param {String|RegExp} arg1
 * @param {String|Function} arg2
 * @param {String} str
 * @return {String}
 * @since 0.1.0
 * @category Native
 * @sing (String | RegExp, String | Function) -> String ->String
 * @example
 * 
 * const replace = f.replace(/yes/, 'no')
 * 
 * replace('yes yes i will yes')
 * // => no no i will no
 */
const replace = (0, _nativeSelfFn2.default)('replace');
var _default = replace;
exports.default = _default;