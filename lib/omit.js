"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

var _tap = _interopRequireDefault(require("./tap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Select the keys of the supplied object
 * which not exists in supplied array
 * 
 * **NOTE:** Shallow copy
 * 
 * @param {Array} keys 
 * @param {Object} obj
 * @return {Object}
 * @category Object, curried
 * @sign [k] -> { k: v } -> { k: v }
 * @see pick
 * @example
 * 
 * let omit = f.omit(['a', 'b'])
 * let obj = { a: 1, b: 2, c: 3 }
 * 
 * omit(obj) // => { c: 3 }
 */
const omit = (0, _curry.default)((keys, obj) => (0, _tap.default)(_obj => Object.keys(obj).forEach(key => keys.includes(key) || (_obj[key] = obj[key])), {}));
var _default = omit;
exports.default = _default;