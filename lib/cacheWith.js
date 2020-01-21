"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

var _has2 = _interopRequireDefault(require("./internal/_has"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pass the `cacheFn` and `fn` to make a new function
 * 
 * When call the new function, 
 * invoke the `cacheFn` with the passed arguments and record the return as the key,
 * record the `fn` return as the value
 * 
 * If the key is already exists, 
 * return the corresponding value without invoke `fn`
 * 
 * @param {Function} cacheFn - Cache with function
 * @param {Function} fn - Origin function
 * @return {Function}
 * @since 0.1.0
 * @category Function, curry2
 * @sign (...x -> a) -> (...x -> a) -> (...x -> a)
 * @example
 * 
 * let num = 0
 * const add = f.cacheWith(f.identity)(() => num += 1)
 * 
 * add(1) // => 1
 * add(1) // => 1
 * add(1) // => 1
 * add(2) // => 3
 */
const cacheWith = (0, _curry.default)((cacheFn, fn) => {
  const cache = {};
  return (...args) => {
    const key = cacheFn(...args);

    if (!(0, _has2.default)(cache, key)) {
      cache[key] = fn(...args);
    }

    return cache[key];
  };
});
var _default = cacheWith;
exports.default = _default;