"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nAry = _interopRequireDefault(require("./nAry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pass the first two parameters to supplied function and ignore others
 * 
 * @param {Function} fn
 * @return {Function}
 * @since 0.1.0
 * @category Function
 * @sign ((a, b, ..., z) -> result) -> ((a, b) -> result)
 * @see unary, uAry
 * @example
 * 
 * let printThree = (a, b, c) => [a, b, c]
 * printThree(1, 2, 3) // => [1, 2, 3]
 * 
 * let printTwo = f.binary(printThree)
 * printTwo(1, 2, 3) // => [1, 2, undefined]
 */
const binary = (0, _nAry.default)(2);
var _default = binary;
exports.default = _default;