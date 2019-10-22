"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Like `>=`
 * 
 * Check the second parameter is bigger than or equal with the first
 * 
 * @param {*} x 
 * @param {*} e 
 * @return {Boolean}
 * @since 0.1.0
 * @category Logic, curried
 * @sign a -> a -> Boolean
 * @see lte, gt
 * @example
 * 
 * let greaterOrEuqal5 = f.gte(5)
 * 
 * greaterOrEuqal5(6) // => true
 * greaterOrEuqal5(5) // => true
 * greaterOrEuqal5(4) // => false
 */
const gte = (0, _curry.default)((x, e) => e >= x);
var _default = gte;
exports.default = _default;