import _curry2 from './internal/_curry2'

/**
 * Like `-`
 * 
 * The second parameter subtract the first 
 * 
 * @param {Number} x 
 * @param {Number} e
 * @return {Number}
 * @category Logic, curried
 * @sign Number -> Number -> Number
 * @see add
 * @example
 * 
 * f.subtract(3)(1) // => -2
 * f.subtract(3)('a') // => NaN
 */
const subtract = _curry2((x, e) => e - x)

export default subtract