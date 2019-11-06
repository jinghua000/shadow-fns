import _curry2 from './internal/_curry2'

/**
 * Like `/`
 * 
 * The second parameter divide the first 
 * 
 * @param {Number} x 
 * @param {Number} e 
 * @return {Number}
 * @since 0.1.0
 * @category Logic, curry2
 * @sign Number -> Number -> Number
 * @see multiply
 * @example 
 * 
 * let divide3 = f.divide(3)
 * 
 * divide3(9) // => 3
 * divide3(12) // => 4
 */
const divide = _curry2((x, e) => e / x)

export default divide
