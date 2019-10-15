"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Supply the key and default value
 * 
 * Read the key of the object
 * 
 * If true return the corresponding value
 * 
 * Else return the default value
 * 
 * Like `obj[key] || def`
 * 
 * @param {*} key 
 * @param {*} def 
 * @param {Object} obj
 * @return {*}
 * @category Object, curried
 * @sign (a, b) -> Object -> a | b
 * @see prop, propEq
 * @example
 * 
 * let readA = f.propOr('a', false)
 * 
 * readA({ a: 123 }) // => 123
 * readA({}) // => false
 */
const propOr = (0, _curry.default)((key, def, obj) => obj[key] || def);
var _default = propOr;
exports.default = _default;