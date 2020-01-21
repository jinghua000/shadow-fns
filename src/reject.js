import _curry2 from './internal/_curry2'
import opposite from './opposite'

/**
 * Opposite to `Array.prototype.filter`
 * 
 * Only support first parameter
 * 
 * @param {Function} fn 
 * @param {Array} arr
 * @return {Array}
 * @since 0.1.0
 * @category Array, curry2
 * @sign (a -> Boolean) -> [a] -> [a]
 * @see filter
 * @example
 * 
 * const notGreaterThan3 = f.reject(f.gt(3))
 * const arr = [1, 2, 3, 4, 5]
 * 
 * notGreaterThan3(arr) // => [1, 2, 3]
 */
const reject = _curry2((fn, arr) => arr.filter(opposite(fn)))

export default reject