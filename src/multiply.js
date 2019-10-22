import _curry2 from './internal/_curry2'

/**
 * Like `*`
 * 
 * The second parameter multiply the first 
 * 
 * @param {Number} x 
 * @param {Number} e 
 * @return {Number}
 * @since 0.1.0
 * @category Logic, curried
 * @sign Number -> Number -> Number
 * @see divide
 * @example 
 * 
 * let multiply3 = f.multiply(3)
 * 
 * multiply3(2) // => 6
 * multiply3(3) // => 9
 */
const multiply = _curry2((x, e) => e * x)

export default multiply
