"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry3"));

var _path = _interopRequireDefault(require("./path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Read the path of the object
 * 
 * Check the returns is equal with the supplied value
 * 
 * @param {Array} arr 
 * @param {*} val 
 * @param {Object} obj
 * @return {Boolean}
 * @category Object, curried
 * @sign (Array, x) -> Object -> Boolean
 * @see path, pathOr
 * @example
 * 
 * let checkPath = f.pathEq(['a', 'a'], 123)
 * 
 * checkPath({ b: 999 }) // => false
 * checkPath({ a: { a: 123 } }) // => true
 */
const pathEq = (0, _curry.default)((arr, val, obj) => (0, _path.default)(arr)(obj) === val);
var _default = pathEq;
exports.default = _default;