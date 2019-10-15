import _curry2 from './internal/_curry2'

/**
 * If the first parameter smaller than the second one, return 1,
 * if bigger, return -1,
 * else 0 
 * 
 * Used for sort array in descending
 * 
 * @param {*} a 
 * @param {*} b 
 * @return {Number}
 * @category Logic, curried
 * @sign a -> a -> Number
 * @see asc, descend
 * @example
 * 
 * let arr = [3,2,1,4,5]
 * 
 * f.sort(f.desc)(arr) // => [5,4,3,2,1]
 */
const desc = _curry2((a, b) => a < b ? 1 : a > b ? -1 : 0)

export default desc