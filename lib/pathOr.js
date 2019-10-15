"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry3"));

var _path = _interopRequireDefault(require("./path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Read the path of object by `f.path`
 * 
 * If not true return default value
 * 
 * @param {Array} arr 
 * @param {*} def 
 * @param {Object} obj
 * @return {*}
 * @category Object, curried
 * @sign (Array, a) -> Object -> x | a
 * @see path, pathEq
 * @example
 * 
 * let readPathOr = f.pathOr(['a', 'a'], 'no!')
 * 
 * readPathOr({ a: 123 }) // => no!
 * readPathOr({ a: { a: 'yes' } }) // => yes!
 */
const pathOr = (0, _curry.default)((arr, def, obj) => (0, _path.default)(arr)(obj) || def);
var _default = pathOr;
exports.default = _default;