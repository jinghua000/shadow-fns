import _curry2 from './internal/_curry2'

/**
 * Compare the two parameters and return the bigger one 
 * 
 * @param {Number|String} a 
 * @param {Number|String} b 
 * @return {Number|String}
 * @category Logic, curried
 * @sign (a, a) -> a
 * @see min
 * @example
 * 
 * let arr = [1, 3, 10, 4, 9]
 * 
 * arr.reduce(f.max) // => 10
 */
const max = _curry2((a, b) => a > b ? a : b )

export default max