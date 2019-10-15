"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Sort the array with some comparator functions
 * 
 * When one function return 0, call the next one
 * 
 * And return a new array
 * 
 * Use `Array.prototype.sort`
 * 
 * **NOTE:** Shallow copy
 * 
 * @param {...Function} fns 
 * @param {Array} arr
 * @return {Array}
 * @category Array
 * @sign ((a, a) -> Number, ...) -> [a] -> [a]
 * @see sort
 * @example
 *    
 * // sort by age asc, then sort by name asc
 * let sortMethod = f.sortWith(
 *   f.ascend(f.prop('age')), 
 *   f.ascend(f.prop('name'))
 * )
 * 
 * let users = [
 *   { name: 'Elika', age: 10 },
 *   { name: 'Alice', age: 10 },
 *   { name: 'Mike', age: 5 },
 * ]
 * 
 * sortMethod(users)
 * // =>
 * // [
 * //   { name: 'Mike', age: 5 },
 * //   { name: 'Alice', age: 10 },
 * //   { name: 'Elika', age: 10 },
 * // ]
 * 
 */
const sortWith = (...fns) => arr => [].concat(arr).sort((a, b) => {
  let res;

  for (let fn of fns) {
    res = fn(a, b);
    if (res !== 0) break;
  }

  return res;
});

var _default = sortWith;
exports.default = _default;