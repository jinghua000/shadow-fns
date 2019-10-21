"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _random = _interopRequireDefault(require("./random"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Shuffle the array and return a new array
 * 
 * Shallow Copy
 * 
 * @param {Array} arr
 * @return {Array}
 * @since 0.1.0
 * @category Array
 * @sign [a] -> [a]
 * @example
 * 
 * let arr = [1, 2, 3]
 * 
 * f.shuffle(arr) // => [2, 3, 1]
 */
const shuffle = arr => {
  let _arr = [].concat(arr);

  let length = _arr.length;
  let maxIndex = length - 1;
  let i = 0;

  while (i < length) {
    let rand = (0, _random.default)(i, maxIndex);
    let val = _arr[rand];
    _arr[rand] = _arr[i];
    _arr[i] = val;
    i++;
  }

  return _arr;
};

var _default = shuffle;
exports.default = _default;