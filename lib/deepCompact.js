"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pickBy = _interopRequireDefault(require("./pickBy"));

var _isEmpty = _interopRequireDefault(require("./isEmpty"));

var _opposite = _interopRequireDefault(require("./opposite"));

var _type = _interopRequireDefault(require("./type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * If is Array select the elements which are not `empty`
 * 
 * If is Object pick the keys which them values are not `empty`
 * 
 * If is String remove all the space
 * 
 * All of above return a new datum
 * 
 * Others return them self
 * 
 * And `empty` means `null` or `undefined` or `[]` or `{}` or `''`
 * 
 * @param {Array|Object|String} data 
 * @return {Array|Object|String}
 * @since 0.1.8
 * @category Tools
 * @sign a -> a
 * @see isEmpty, compact
 * @example
 * 
 * f.deepCompact([0, false, [], {}, '', null, undefined]) // => [0, false]
 * f.deepCompact({ name: 'dog', age: '', children: [] }) // => { name: 'dog' }
 * f.deepCompact(' i have a plan ') // => ihaveaplan
 */
const deepCompact = data => (0, _type.default)(data) === 'Array' ? data.filter((0, _opposite.default)(_isEmpty.default)) : (0, _type.default)(data) === 'Object' ? (0, _pickBy.default)((0, _opposite.default)(_isEmpty.default), data) : (0, _type.default)(data) === 'String' ? data.replace(/\s/g, '') : data;

var _default = deepCompact;
exports.default = _default;