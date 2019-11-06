"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check two element strict equal by `===`
 * 
 * @param {*} x 
 * @param {*} e
 * @return {Boolean}
 * @since 0.1.0
 * @category Logic, curry2
 * @see equals
 * @example 
 * 
 * f.eq(1)(1) // => true
 * f.eq(NaN)(NaN) // => false
 * f.eq({})({}) // => false
 */
const eq = (0, _curry.default)((x, e) => e === x);
var _default = eq;
exports.default = _default;