"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just Like `Array.prototype.map`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map  
 * 
 * @param {Function} fn
 * @param {Array} [thisArg]
 * @param {Array} arr
 * @category Native
 * @return {Array}
 * @sign (a -> b) -> [a] -> [b]
 * @example
 * 
 * let mapDouble = f.map(f.multiply(2))
 * 
 * mapSquare([1, 2, 3]) // => [2, 4, 6]
 */
const map = (0, _nativeSelfFn2.default)('map');
var _default = map;
exports.default = _default;