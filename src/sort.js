/**
 * Like `Array.prototype.sort`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * 
 * But it will not change the supplied array
 * 
 * **NOTE:** Shallow copy
 * 
 * @param {Function} [fn] 
 * @param {Array} arr
 * @return {Array}
 * @since 0.1.0
 * @category Native
 * @sign ((a, a) -> Number) -> [a] -> [a]
 * @see sortWith
 * @example
 * 
 * const sortAsc = f.sort(f.asc)
 * 
 * sortAsc([10, 9, 1, 3, 2]) // => [1, 2, 3, 9, 10]
 */
const sort = (...args) => arr => [].concat(arr).sort(...args)

export default sort