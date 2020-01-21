"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tap = _interopRequireDefault(require("./tap"));

var _merge = _interopRequireDefault(require("./merge"));

var _curry = _interopRequireDefault(require("./internal/_curry3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return a new object (shallow copy) which associate the key and value 
 * 
 * @param {*} key 
 * @param {*} val 
 * @param {Object} obj 
 * @return {Object}
 * @since 0.1.0
 * @category Object, curry3
 * @sign x -> x -> Object -> Object
 * @see dissoc
 * @example
 * 
 * const obj = { a: 123 }
 * 
 * f.assoc('b', 234)(obj) // => { a: 123, b: 234 }
 */
const assoc = (0, _curry.default)((key, val, obj) => (0, _tap.default)(_obj => _obj[key] = val, (0, _merge.default)(obj)));
var _default = assoc;
exports.default = _default;