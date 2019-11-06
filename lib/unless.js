"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pass parameter to the first supplied function,
 * if not true invoke the second one,
 * else return self
 * 
 * @param {Function} tryer 
 * @param {Function} handler 
 * @param {*} x
 * @return {*}
 * @since 0.1.0
 * @category Tools, curry3
 * @sign (a -> b, a -> c, a) -> a | c
 * @see when, ifElse, cond
 * @example
 * 
 * let cannotBelow3 = f.unless(f.gt(3), f.always('so small'))
 * 
 * cannotBelow3(5) // => 5
 * cannotBelow3(1) // => 'so small'
 */
const unless = (0, _curry.default)((tryer, handler, x) => tryer(x) ? x : handler(x));
var _default = unless;
exports.default = _default;