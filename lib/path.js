"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

var _isNil = _interopRequireDefault(require("./isNil"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Read the path of the object
 * 
 * If key not exist will return `undefined`
 * 
 * If not pass path will return object self
 * 
 * Can also handle array.
 * 
 * @param {Array} arr 
 * @param {Object} obj
 * @return {*} 
 * @since 0.1.0
 * @category Object, curry2
 * @sign Array -> Object -> x
 * @see pathOr, pathEq
 * @example
 * 
 * const readPath = f.path(['a', 'a'])
 * const obj1 = { a: { a: 123 } }
 * const obj2 = { a: { b: 123 } }
 * 
 * readPath(obj1) // => 123
 * readPath(obj2) // => undefined
 */
const path = (0, _curry.default)((arr, obj) => {
  let val = obj;

  for (let i = 0; i < arr.length; i++) {
    if ((0, _isNil.default)(val)) return;
    val = val[arr[i]];
  }

  return val;
});
var _default = path;
exports.default = _default;