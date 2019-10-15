"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just like `String.prototype.match`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match  
 * 
 * @param {RegExp} args
 * @param {String} str
 * @return {Array}
 * @category Native
 * @sign RegExp -> String -> Array
 * @see test
 * @example
 * 
 * let matchAll = f.match(/\{.*?\}/g)
 * 
 * matchAll('{aa}-{bb}-{cc}')
 * // => ['{aa}', '{bb}', '{cc}']
 */
const match = (0, _nativeSelfFn2.default)('match');
var _default = match;
exports.default = _default;