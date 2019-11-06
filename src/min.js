import _curry2 from './internal/_curry2'

/**
 * Compare the two parameters and return the smaller one 
 * 
 * @param {Number|String} a 
 * @param {Number|String} b 
 * @return {Number|String}
 * @since 0.1.0
 * @category Logic, curry2
 * @sign (a, a) -> a
 * @see max
 * @example
 * 
 * let arr = [1, 3, 10, 4, 9]
 * 
 * arr.reduce(f.min) // => 1
 */
const min = _curry2((a, b) => a < b ? a : b )

export default min