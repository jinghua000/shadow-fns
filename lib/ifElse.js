"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pass parameters to the first supplied function,
 * if true invoke the second one,
 * else invoke the third one
 * 
 * @param {Function} tryer 
 * @param {Function} reslover 
 * @param {Function} rejecter 
 * @return {Function}
 * @since 0.1.0
 * @category Tools, curry3
 * @sign (...a -> b, ...a -> c, ...a -> d) -> (...a -> c | d)
 * @see when, unless, cond
 * @example
 * 
 * const check3 = f.ifElse(f.gt(3), f.always('so big'), f.always('so small'))
 * check3(5) // => 'so big'
 * check3(1) // => 'so small'
 */
const ifElse = (0, _curry.default)((tryer, reslover, rejecter) => (...args) => tryer(...args) ? reslover(...args) : rejecter(...args));
var _default = ifElse;
exports.default = _default;