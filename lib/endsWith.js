"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just Like `String.prototype.endsWith`  
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
 * 
 * @param {String} str
 * @param {Number} [length]
 * @param {String} data
 * @return {Boolean}
 * @since 0.1.0
 * @category Native
 * @sign String -> String -> Boolean
 * @see startsWith
 * @example
 * 
 * const str = 'i have a plan'
 * 
 * f.endsWith('plan')(str) // => true
 */
const endsWith = (0, _nativeSelfFn2.default)('endsWith');
var _default = endsWith;
exports.default = _default;