import _curry2 from './internal/_curry2'
import uniq from './uniq'

/**
 * Return a new uniq array
 * 
 * Select unique elements either exist in one array or another
 * 
 * Order from second to first
 * 
 * **NOTE:** Shallow Copy
 * 
 * @param {Array} arrx 
 * @param {Array} arr
 * @return {Array}
 * @since 0.1.0
 * @category Array, curry2
 * @sign Array -> Array -> Array
 * @see difference, intersection, uniq
 * @example
 * 
 * const arr1 = [1, 2, 3]
 * const arr2 = [2, 2, 3, 4]
 * 
 * f.union(arr1)(arr2) // => [2, 3, 4, 1]
 */
const union = _curry2((arrx, arr) => uniq([].concat(arr, arrx)))

export default union