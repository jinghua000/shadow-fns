"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just like `String.prototype.split`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split  
 * 
 * @param {String|RegExp} [separator]
 * @param {Number} [limit]
 * @param {String} str
 * @return {Array}
 * @category Native
 * @sign (String | RegExp) -> String -> Array
 * @see join
 * @example
 * 
 * let str = 'i have a plan'
 * let splitWithBlank = f.split(' ')
 * 
 * splitWithBlank(str) // => ['i', 'have', 'a', 'plan']
 */
const split = (0, _nativeSelfFn2.default)('split');
var _default = split;
exports.default = _default;