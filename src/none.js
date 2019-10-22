import _curry2 from './internal/_curry2'
import opposite from './opposite'

/**
 * Opposite to `Array.prototype.every`
 * 
 * Only support first parameter(Function)
 * 
 * @param {Function} fn
 * @param {Array} arr
 * @return {Boolean}
 * @since 0.1.0
 * @category Array, curried
 * @sign (a -> Boolean) -> [a] -> Boolean
 * @see every, some
 * @example
 * 
 * let noneGreaterThan3 = f.none(f.gt(3))
 * 
 * noneGreaterThan3([1, 2, 3]) // => true
 * noneGreaterThan3([2, 3, 4]) // => false
 */
const none = _curry2((fn, arr) => arr.every(opposite(fn)))

export default none