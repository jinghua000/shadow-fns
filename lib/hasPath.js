"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

var _has = _interopRequireDefault(require("./has"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check the object has the path
 * 
 * Check every element with `f.has`
 * 
 * @param {Array} arr 
 * @param {Object} obj 
 * @return {Boolean}
 * @since 0.1.0
 * @category Object, curry2
 * @sign Array -> Object -> Boolean
 * @see has
 * @example
 * 
 * const hasPath = f.hasPath(['a', 'a'])
 * 
 * hasPath({ a: { a: 123 } }) // => true
 * hasPath({ b: 123 }) // => false
 */
const hasPath = (0, _curry.default)((arr, obj) => {
  let val = obj;

  for (let i = 0; i < arr.length; i++) {
    const k = arr[i];
    if (!(0, _has.default)(k, val)) return false;
    val = val[k];
  }

  return true;
});
var _default = hasPath;
exports.default = _default;