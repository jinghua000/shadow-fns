"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pass the array to the function 
 * and function will called by the rest arguments of array
 * 
 * Similar to `Function.prototype.apply`, but without context
 *  
 * @param {Function} fn 
 * @param {Array} args
 * @return {*}
 * @since 0.1.0
 * @category Function, curried
 * @sign (...x -> a) -> [x] -> a
 * @see call
 * @example 
 * 
 * let print = (...args) => args
 * let fn = f.apply(print)
 * 
 * fn([1, 2, 3]) // => [1, 2, 3]
 */
const apply = (0, _curry.default)((fn, args) => fn(...args));
var _default = apply;
exports.default = _default;