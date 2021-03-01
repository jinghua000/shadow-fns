"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Move the element of supplied array from `from` to `to`.
 * 
 * Support negative index, 
 * and if supplied index is out of range will return the origin array.
 * 
 * **NOTE:** Shallow Copy
 * 
 * @param {Number} from
 * @param {Number} to
 * @param {Array} arr
 * @return {Array}
 * @since 0.1.4
 * @category Array, curry3
 * @sign Number -> Number -> [a] -> [a]
 * @example
 * 
 * const arr = [1, 2, 3, 4]
 * 
 * f.move(1, 2, arr) // => [1, 3, 2, 4]
 * f.move(-1, 0, arr) // => [4, 1, 2, 3]
 * f.move(-100, 100, arr) // => [1, 2, 3, 4]
 */
const move = (0, _curry.default)((from, to, arr) => {
  const length = arr.length;
  const fromIndex = from < 0 ? length + from : from;
  const toIndex = to < 0 ? length + to : to;

  if (fromIndex >= length || toIndex >= length || fromIndex < 0 || toIndex < 0) {
    return arr;
  } else {
    const result = [].concat(arr);
    result.splice(toIndex, 0, result.splice(fromIndex, 1)[0]);
    return result;
  }
});
var _default = move;
exports.default = _default;