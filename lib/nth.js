"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return the nth element of the data
 * 
 * Support negative number
 * 
 * @param {Number} index 
 * @param {String|Array} list
 * @return {*}
 * @since 0.1.0
 * @category Tools
 * @sign Number -> String -> String
 * @sign Number -> [a] -> a
 * @see first, last
 * @example
 * 
 * let str = 'abcdefg'
 * f.nth(3)(str) // => d
 * f.nth(-2)(str) // => f
 * 
 * let arr = [1, 2, 3, 4, 5]
 * f.nth(5)(arr) // => undefined
 * f.nth(-1)(arr) // => 5
 */
const nth = (0, _curry.default)((index, list) => list[index < 0 ? list.length + index : index]);
var _default = nth;
exports.default = _default;