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
 * @param {Array} arr 
 * @param {Object} obj
 * @return {*} 
 * @category Object, curried
 * @sign Array -> Object -> x
 * @see pathOr, pathEq
 * @example
 * 
 * let readPath = f.path(['a', 'a'])
 * let obj1 = { a: { a: 123 } }
 * let obj2 = { a: { b: 123 } }
 * 
 * readPath(obj1) // => 123
 * readPath(obj2) // => undefined
 */
const path = (0, _curry.default)((arr, obj) => {
  let val = obj;

  for (let k of arr) {
    if ((0, _isNil.default)(val)) return;
    val = val[k];
  }

  return val;
});
var _default = path;
exports.default = _default;