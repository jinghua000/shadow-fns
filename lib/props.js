"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Select the values by the supplied keys 
 * 
 * Return an array
 * 
 * @param {Array} keys 
 * @param {Object} obj
 * @return {Array}
 * @since 0.1.0
 * @category Object, curry2
 * @sign Array -> Object -> Array
 * @see prop
 * @example
 * 
 * let obj = { a: 1, b: 2, c: 3 }
 * 
 * f.props(['a', 'b', 'c', 'd'])(obj)
 * // => [1, 2, 3, undefined]
 */
const props = (0, _curry.default)((keys, obj) => keys.map(key => obj[key]));
var _default = props;
exports.default = _default;