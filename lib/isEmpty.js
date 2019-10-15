"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _equals = _interopRequireDefault(require("./equals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check the element is equal with one of below
 * `undefined`, `null`, `''`, `[]`, `{}`
 * 
 * @param {*} e
 * @return {Boolean} 
 * @category Tools
 * @sign x -> Boolean
 * @see isNil
 * @example
 * 
 * f.isEmpty({}) // => true
 * f.isEmpty('') // => true
 * f.isEmpty([undefined]) // => false
 */
const isEmpty = e => [undefined, null, '', [], {}].some((0, _equals.default)(e));

var _default = isEmpty;
exports.default = _default;