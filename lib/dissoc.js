"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tap = _interopRequireDefault(require("./tap"));

var _merge = _interopRequireDefault(require("./merge"));

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return a new object (shallow copy) which delete the key
 * 
 * @param {*} key 
 * @param {Object} obj 
 * @return {Object}
 * @since 0.1.0
 * @category Object, curried
 * @sign x -> Object -> Object
 * @see dissoc
 * @example
 * 
 * let obj = { a: 123, b: 234 }
 * 
 * f.dissoc('b')(obj) // => { a: 123 }
 */
const dissoc = (0, _curry.default)((key, obj) => (0, _tap.default)(_obj => delete _obj[key], (0, _merge.default)(obj)));
var _default = dissoc;
exports.default = _default;