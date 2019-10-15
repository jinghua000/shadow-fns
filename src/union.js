import _curry2 from './internal/_curry2'
import uniq from './uniq'

/**
 * Return a new uniq array
 * 
 * Select unique elements either exist in one array or another
 * 
 * Order from second to first
 * 
 * @param {Array} arrx 
 * @param {Array} arr
 * @return {Array}
 * @category Array, curried
 * @sign Array -> Array -> Array
 * @see difference, intersection, uniq
 * @example
 * 
 * let arr1 = [1, 2, 3]
 * let arr2 = [2, 2, 3, 4]
 * 
 * f.union(arr1)(arr2) // => [2, 3, 4, 1]
 */
const union = _curry2((arrx, arr) => uniq([].concat(arr, arrx)))

export default union