"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pickBy = _interopRequireDefault(require("./pickBy"));

var _isNil = _interopRequireDefault(require("./isNil"));

var _opposite = _interopRequireDefault(require("./opposite"));

var _type = _interopRequireDefault(require("./type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * If is Array select the elements which are not nil
 * 
 * If is Object pick the keys which them values are not nil
 * 
 * If is String remove all the space
 * 
 * All of above return a new datum
 * 
 * Others return them self
 * 
 * And nil means `null` or `undefined`
 * 
 * @param {Array|Object|String} data 
 * @return {Array|Object|String}
 * @since 0.1.0
 * @category Tools
 * @sign a -> a
 * @see isNil
 * @example
 * 
 * f.compact([0, 1, 2, null, undefined]) // => [0, 1, 2]
 * f.compact({ name: 'dog', age: null }) // => { name: 'dog' }
 * f.compact(' i have a plan ') // => ihaveaplan
 */
const compact = data => (0, _type.default)(data) === 'Array' ? data.filter((0, _opposite.default)(_isNil.default)) : (0, _type.default)(data) === 'Object' ? (0, _pickBy.default)((0, _opposite.default)(_isNil.default))(data) : (0, _type.default)(data) === 'String' ? data.replace(/\s/g, '') : data;

var _default = compact;
exports.default = _default;