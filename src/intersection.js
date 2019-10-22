import _curry2 from './internal/_curry2'
import uniq from './uniq'

/**
 * Return a new uniq array
 * 
 * Select unique elements both exist in one array and another
 * 
 * Order from second to first
 * 
 * Use `Array.prototype.includes`
 * 
 * **NOTE:** Shallow Copy
 *  
 * @param {Array} arrx 
 * @param {Array} arr
 * @return {Array}
 * @since 0.1.0
 * @category Array, curried
 * @sign Array -> Array -> Array
 * @see difference, union, uniq
 * @example
 * 
 * let arr1 = [1, 3, 5]
 * let arr2 = [7, 5, 3]
 * 
 * f.intersection(arr1)(arr2) // => [5, 3]
 */
const intersection = _curry2((arrx, arr) => uniq(
  [].concat(arr).filter(
    e => arrx.includes(e)
  )
))

export default intersection