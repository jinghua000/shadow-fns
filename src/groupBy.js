import _curry2 from './internal/_curry2'
import tap from './tap'

/**
 * Group the array by the supplied function
 * 
 * Return a object, function's returns as key, 
 * satisfied elements as array values
 * 
 * @param {Function} fn 
 * @param {Array} arr
 * @return {Object}
 * @since 0.1.0
 * @category Array, curry2
 * @sign (a -> b) -> [a] -> { b: [a] }
 * @example
 * 
 * let arr = [1, 2, 3, 4, 5]
 * let group = f.groupBy(e => e < 3 ? 'small' : 'big')
 * 
 * group(arr)
 * // => { small: [1, 2], big: [3, 4, 5] }
 */
const groupBy = _curry2((fn, arr) => tap(
  obj => arr.forEach(
    e => tap(
      cat => (obj[cat] = obj[cat] || []).push(e), 
      fn(e)
    )
  ), {}
))

export default groupBy