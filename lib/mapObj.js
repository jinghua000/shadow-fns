"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

var _tap = _interopRequireDefault(require("./tap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Like `Array.prototype.map` for `{}`
 * 
 * Supplied a function and object
 * 
 * Return a new object, 
 * pass every object value to function
 * and set them as the returns of function
 * 
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @since 0.1.0
 * @category Object, curry2
 * @sign (a -> b) -> { k: a } -> { k: b }
 * @example 
 * 
 * let obj = { a: 1, b: 2, c: 3 }
 * let everyAdd1 = f.mapObj(f.add(1))
 * 
 * everyAdd1(obj) // => { a: 2, b: 3, c: 4 }
 */
const mapObj = (0, _curry.default)((fn, obj) => (0, _tap.default)(_obj => Object.keys(obj).forEach(k => _obj[k] = fn(obj[k])), {}));
var _default = mapObj;
exports.default = _default;