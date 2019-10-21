"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just like `Array.prototype.join`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join  
 * 
 * @param {String} [separator]
 * @param {Array} data
 * @return {String} 
 * @since 0.1.0
 * @category Native
 * @sign String -> Array -> String
 * @see split
 * @example
 * 
 * let arr = ['i', 'have', 'a', 'plan']
 * 
 * f.join(' ')(arr) // => 'i have a plan'
 */
const join = (0, _nativeSelfFn2.default)('join');
var _default = join;
exports.default = _default;