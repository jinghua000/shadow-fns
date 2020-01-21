"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

var _isNil = _interopRequireDefault(require("./isNil"));

var _has2 = _interopRequireDefault(require("./internal/_has"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check Object has the supplied key
 * 
 * Use `Object.prototype.hasOwnProperty`
 * 
 * @param {*} key 
 * @param {Object} obj 
 * @return {Boolean}
 * @since 0.1.0
 * @category Object, curry2
 * @sign x -> Object -> Boolean
 * @see hasPath
 * @example
 * 
 * const hasA = f.has('a')
 * 
 * hasA({ a: 123 }) // => true
 * hasA({ b: 123 }) // => fasle
 */
const has = (0, _curry.default)((key, obj) => !(0, _isNil.default)(obj) && (0, _has2.default)(obj, key));
var _default = has;
exports.default = _default;