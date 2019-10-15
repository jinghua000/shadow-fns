"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just like `includes` of `Array.prototype` and `String.prototype`  
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes  
 * 
 * @param {*} args
 * @param {Number} [position]
 * @param {Array|String} data
 * @return {Boolean}
 * @category Native
 * @sign x -> [a] -> Boolean
 * @sign x -> a -> Boolean
 * @example
 * 
 * let includes = f.includes('yes')
 * 
 * includes(['i', 'say', 'yes', '!']) // => true
 * includes('i say yes!') // => true
 * includes('i say no!') // => false
 */
const includes = (0, _nativeSelfFn2.default)('includes');
var _default = includes;
exports.default = _default;