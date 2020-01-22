"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uncurryN = _interopRequireDefault(require("./uncurryN"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Change a curried function to an uncurry equivalent function
 * 
 * @param {Function} fn 
 * @return {Function}
 * @since 0.1.0
 * @category Function
 * @sign (a -> b -> ... -> z -> result) -> (a, b, ..., z) -> result
 * @see uncurryN, curry
 * @example
 * 
 * const add = a => b => c => a + b + c
 * const fn = f.uncurry(add)
 * 
 * fn('a', 'b', 'c') // => 'abc'
 */
const uncurry = fn => (...args) => (0, _uncurryN.default)(args.length, fn)(...args);

var _default = uncurry;
exports.default = _default;