"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just Like `String.prototype.startsWith`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
 * 
 * @param {String} str
 * @param {Number} [length]
 * @param {String} data
 * @return {Boolean}
 * @category Native
 * @sign (String) -> String -> Boolean
 * @see endsWith
 * @example
 * 
 * let str = 'i have a plan'
 * 
 * f.startsWith('i have')(str) // => true
 */
const startsWith = (0, _nativeSelfFn2.default)('startsWith');
var _default = startsWith;
exports.default = _default;