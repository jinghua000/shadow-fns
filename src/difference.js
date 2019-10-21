import _curry2 from './internal/_curry2'
import uniq from './uniq'

/**
 * Return a new uniq array
 * 
 * Select unique elements exist in one array and not in another 
 * 
 * Order from second to first
 * 
 * Use `Array.prototype.includes`
 * 
 * @param {Array} arrx 
 * @param {Array} arr
 * @return {Array}
 * @since 0.1.0
 * @category Array, curried
 * @sign Array -> Array -> Array
 * @see intersection, union, uniq
 * @example
 * 
 * let arr1 = [1, 3, 5]
 * let arr2 = [3, 5, 7]
 * 
 * f.difference(arr1)(arr2) // => [7, 1]
 */
const difference = _curry2((arrx, arr) => uniq(
  [].concat(arr, arrx).filter(
    e => !arr.includes(e) || !arrx.includes(e)
  )
))

export default difference