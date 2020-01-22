"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just Like `Array.prototype.reduce`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 * 
 * @param {Function} fn
 * @param {*} [def]
 * @param {Array} data
 * @return {*}
 * @since 0.1.0
 * @category Native
 * @sign (x -> a) -> Array -> a
 * @example
 * 
 * const sum = f.reduce((acc, cur) => acc += cur)
 * 
 * sum([1, 2, 3]) // => 6
 */
const reduce = (0, _nativeSelfFn2.default)('reduce');
var _default = reduce;
exports.default = _default;