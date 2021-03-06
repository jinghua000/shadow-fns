"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Read the key of the object
 * 
 * Like `obj[key]`
 * 
 * @param {*} key
 * @param {Object} obj
 * @return {*}
 * @since 0.1.0
 * @category Object, curry2
 * @sign x -> Object -> x
 * @see props, propOr, propEq
 * @example
 * 
 * const a = { a: 1, b: 0 }
 * const b = { a: 2 }
 * const getA = f.prop('a')
 * const getB = f.prop('b')
 * 
 * getA(a) // => 1
 * getA(b) // => 2
 * getB(b) // => undefined
 */
const prop = (0, _curry.default)((key, obj) => obj[key]);
var _default = prop;
exports.default = _default;