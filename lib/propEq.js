"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Read the key of object
 * 
 * Check the corresponding value is equal with supplied val
 * 
 * Use `===`
 * 
 * @param {*} key 
 * @param {*} val 
 * @param {Object} obj
 * @return {*}
 * @category Object, curried
 * @sign (a, b) -> Object -> Boolean
 * @see prop, propOr
 * @example
 * 
 * let checkEq = f.propEq('a', 123)
 * let obj1 = { a: 123 }
 * let obj2 = { a: 234 }
 * 
 * checkEq(obj1) // => true
 * checkEq(obj2) // => false
 */
const propEq = (0, _curry.default)((key, val, obj) => obj[key] === val);
var _default = propEq;
exports.default = _default;