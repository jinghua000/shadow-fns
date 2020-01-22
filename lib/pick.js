"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

var _merge = _interopRequireDefault(require("./merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pick some keys of object
 * 
 * Return a new object with the corresponding key and value 
 * 
 * **NOTE:** Shallow copy
 * 
 * @param {Array} keys 
 * @param {Object} obj
 * @return {Object}
 * @since 0.1.0
 * @category Object, curry2
 * @sign [k] -> { k: v } -> { k: v }
 * @see pickBy, omit
 * @example
 * 
 * const pickAB = f.pick(['a', 'b'])
 * const obj = { a: 123, b: 234, c: 345 }
 * 
 * pickAB(obj) // => { a: 123, b: 234 }
 */
const pick = (0, _curry.default)((keys, obj) => (0, _merge.default)(...keys.map(key => ({
  [key]: obj[key]
}))));
var _default = pick;
exports.default = _default;