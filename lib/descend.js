"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry3"));

var _desc = _interopRequireDefault(require("./desc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pass a function and sort by the returns in descending
 * 
 * @param {Function} fn 
 * @param {*} a 
 * @param {*} b 
 * @return {Number}
 * @category Tools, curried
 * @sign (a -> x) -> a -> a -> Number
 * @see desc, ascend
 * @example
 * 
 * const users = [
 *   { name: 'dog', age: 5 },
 *   { name: 'cat', age: 7 },
 *   { name: 'human', age: 12 },
 * ]
 * 
 * const sortByAgeDesc = f.sort(f.descend(f.prop('age')))
 * 
 * sortByAgeDesc(users)
 * // =>
 * // [
 * //   { name: 'human', age: 12 },
 * //   { name: 'cat', age: 7 },
 * //   { name: 'dog', age: 5 },
 * // ]
 */
const descend = (0, _curry.default)((fn, a, b) => (0, _desc.default)(fn(a), fn(b)));
var _default = descend;
exports.default = _default;