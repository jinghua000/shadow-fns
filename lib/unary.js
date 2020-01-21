"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nAry2 = _interopRequireDefault(require("./internal/_nAry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pass the first parameters to supplied function and ignore others
 * 
 * @param {Function} fn
 * @return {Function}
 * @since 0.1.0
 * @category Function
 * @sign ((a, b, ..., z) -> result) -> (a -> result)
 * @see binary, nAry
 * @example
 * 
 * const arr = [1, 2, 3]
 * 
 * arr.map(parseInt) // => [1, NaN, NaN]
 * arr.map(f.unary(parseInt)) // => [1, 2, 3]
 */
const unary = (0, _nAry2.default)(1);
var _default = unary;
exports.default = _default;