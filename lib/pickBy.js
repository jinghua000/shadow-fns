"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

var _keys = _interopRequireDefault(require("./keys"));

var _tap = _interopRequireDefault(require("./tap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pass every `value` and `key` of the object to the supplied function,  
 * if return true, select corresponding key and value.  
 * 
 * Return a new object.
 * 
 * **NOTE:** Shallow copy  
 * **NOTE:** Not support prototype chain  
 * 
 * @param {Function} fn 
 * @param {Object} obj
 * @return {Object}
 * @since 0.1.0
 * @category Object, curried
 * @sign ((v, k) -> Boolean) -> { k: v } -> { k: v }
 * @see pick
 * @example
 * 
 * let obj = { a: 1, b: 2, c: 3}
 * let pickBy = f.pickBy(f.gte(2))
 * 
 * pickBy(obj) // => { b: 2, c: 3 }
 */
const pickBy = (0, _curry.default)((fn, obj) => (0, _tap.default)(_obj => (0, _keys.default)(obj).forEach(key => {
  let val = obj[key];
  fn(val, key) && (_obj[key] = val);
}), {}));
var _default = pickBy;
exports.default = _default;