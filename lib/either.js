"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check the supplied parameters is satisfied either of the two function
 * 
 * First sceond, then first, like `fn2 || fn1`
 * 
 * @param {Function} fn1 
 * @param {Function} fn2 
 * @param {...*} args
 * @return {*}
 * @category Tools, curried
 * @sign (...x -> a) -> (...x -> b) -> (...x -> a | b)
 * @see both, somePass
 * @example
 * 
 * let isSatisfied = f.either(f.gt(15), f.lt(10))
 * 
 * isSatisfied(8) // => true
 * isSatisfied(11) // => false
 * isSatisfied(20) // => true
 */
const either = (0, _curry.default)((fn1, fn2) => (...args) => fn2(...args) || fn1(...args));
var _default = either;
exports.default = _default;