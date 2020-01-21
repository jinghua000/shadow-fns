"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _keys = _interopRequireDefault(require("./keys"));

var _type = _interopRequireDefault(require("./type"));

var _tap = _interopRequireDefault(require("./tap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Deep copy the object and return a new object
 * 
 * Support `[]` and `{}`, others will return themself
 * 
 * **NOTE:** Not support prototype chain
 * 
 * @param {*} data 
 * @return {*}
 * @since 0.1.0
 * @category Tools
 * @sign a -> a
 * @example
 * 
 * const arr = [{}, {}, {}]
 * const arr2 = f.clone(arr) // => [{}, {}, {}]
 * arr[0] === arr2[0] // => false
 */
const clone = data => (0, _type.default)(data) === 'Array' ? (0, _tap.default)(arr => data.forEach(v => arr.push(clone(v))), []) : (0, _type.default)(data) === 'Object' ? (0, _tap.default)(obj => (0, _keys.default)(data).forEach(k => obj[k] = clone(data[k])), {}) : data;

var _default = clone;
exports.default = _default;