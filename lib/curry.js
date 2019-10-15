"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curryN2 = _interopRequireDefault(require("./internal/_curryN"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return a curried equivalent function  
 * 
 * **NOTE:** Not support rest parameters  
 * **NOTE:** Not support default parameters  
 * 
 * @param {Function} fn 
 * @return {Function}
 * @category Function
 * @sign ((a, b, ..., z) -> result) -> a -> b -> ... -> z -> result
 * @see curryN, partial
 * @example
 * 
 * let fn = (a, b, c, d) => a + b + c + d
 * fn = f.curry(fn)
 * 
 * fn(1, 2, 3, 4) // => 10
 * fn(1, 2)(3, 4) // => 10
 * fn(1, 2, 3)(4) // => 10
 * fn(1)(2, 3, 4) // => 10
 * fn(1)(2)(3)(4) // => 10
 */
const curry = fn => (0, _curryN2.default)(fn.length)(fn);

var _default = curry;
exports.default = _default;