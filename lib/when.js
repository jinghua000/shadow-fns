"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pass parameter to the first supplied function,
 * if true invoke the second one,
 * else return self
 * 
 * @param {Function} tryer 
 * @param {Function} handler 
 * @param {*} x
 * @return {*}
 * @since 0.1.0
 * @category Tools, curry3
 * @sign (a -> b, a -> c, a) -> a | c
 * @see unless, ifElse, cond
 * @example
 * 
 * let cannotOver3 = f.when(f.gt(3), f.always('so big'))
 * 
 * cannotOver3(5) // => 'so big'
 * cannotOver3(1) // => 1
 */
const when = (0, _curry.default)((tryer, handler, x) => tryer(x) ? handler(x) : x);
var _default = when;
exports.default = _default;