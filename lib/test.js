"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just Like `RegExp.prototype​.test`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
 * 
 * But this is a little different,
 * it is curried and `RegExp` is the first parameter
 * 
 * @param {RegExp} reg 
 * @param {String} str
 * @return {Boolean}
 * @category Native, curried
 * @sign RegExp -> String -> Boolean
 * @see match
 * @example
 * 
 * let test = f.test(/hello/)
 * 
 * test('hello world') // => true
 * test('goodbye world') // => false
 */
const test = (0, _curry.default)((reg, str) => reg.test(str));
var _default = test;
exports.default = _default;