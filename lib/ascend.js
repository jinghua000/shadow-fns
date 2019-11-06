"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry3"));

var _asc = _interopRequireDefault(require("./asc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pass a function and sort by the returns in ascending
 * 
 * @param {Function} fn
 * @param {*} a 
 * @param {*} b 
 * @return {Number}
 * @since 0.1.0
 * @category Tools, curry3
 * @sign (a -> x) -> a -> a -> Number
 * @see asc, descend
 * @example
 * 
 * const users = [
 *   { name: 'human', age: 12 },
 *   { name: 'cat', age: 7 },
 *   { name: 'dog', age: 5 },
 * ]
 * 
 * const sortByAge = f.sort(f.ascend(f.prop('age')))
 * 
 * sortByAge(users)
 * // =>
 * // [
 * //   { name: 'dog', age: 5 },
 * //   { name: 'cat', age: 7 },
 * //   { name: 'human', age: 12 },
 * // ]
 */
const ascend = (0, _curry.default)((fn, a, b) => (0, _asc.default)(fn(a), fn(b)));
var _default = ascend;
exports.default = _default;