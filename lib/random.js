"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get a random integer between the min and the max number supplied
 * 
 * Contains the min and the max
 * 
 * **NOTE:** Support Integer Only
 * 
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 * @since 0.1.0
 * @category Tools, curried
 * @sign Number -> Number -> Number
 * @example
 * 
 * f.random(1, 10) // => 1
 * f.random(1, 10) // => 9
 * f.random(1, 10) // => 8
 * f.random(1, 10) // => 10
 */
const random = (0, _curry.default)((min, max) => Math.floor(min + Math.random() * (max - min + 1)));
var _default = random;
exports.default = _default;