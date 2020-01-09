"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

var _type = _interopRequireDefault(require("./type"));

var _keys2 = _interopRequireDefault(require("./keys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check every element strict equal by `===`
 * 
 * Support `[]` and `{}`
 * 
 * Also `NaN` considered the same
 * 
 * **NOTE:** Not support prototype chain
 * 
 * @param {*} x 
 * @param {*} e 
 * @return {Boolean}
 * @since 0.1.0
 * @category Logic, curry2
 * @sign a -> b -> Boolean
 * @see eq
 * @example 
 *    
 * f.equals([1, 2, 3])([1, 2, 3]) // => true
 * f.equals([1, 2, 3])([1, 2, '3']) // => false
 * f.equals({ a: 123 })({ a: 123 }) // => true
 */
const equals = (0, _curry.default)((x, e) => {
  if (e === x) return true;
  const t1 = (0, _type.default)(e);
  const t2 = (0, _type.default)(x);

  if (t1 === 'Array' && t2 === 'Array') {
    let length = e.length;
    if (length !== x.length) return false;

    for (let i = 0; i < length; i++) {
      if (!equals(x[i], e[i])) return false;
    }

    return true;
  }

  if (t1 === 'Object' && t2 === 'Object') {
    let _keys = (0, _keys2.default)(e);

    let length = _keys.length;
    if (length !== (0, _keys2.default)(x).length) return false;

    for (let k of _keys) {
      if (!equals(x[k], e[k])) return false;
    }

    return true;
  }

  return e !== e && x !== x;
});
var _default = equals;
exports.default = _default;