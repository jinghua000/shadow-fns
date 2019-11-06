import _curry2 from './internal/_curry2'

/**
 * Like `>=`
 * 
 * Check the second parameter is bigger than or equal with the first
 * 
 * @param {*} x 
 * @param {*} e 
 * @return {Boolean}
 * @since 0.1.0
 * @category Logic, curry2
 * @sign a -> a -> Boolean
 * @see lte, gt
 * @example
 * 
 * let greaterOrEuqal5 = f.gte(5)
 * 
 * greaterOrEuqal5(6) // => true
 * greaterOrEuqal5(5) // => true
 * greaterOrEuqal5(4) // => false
 */
const gte = _curry2((x, e) => e >= x)

export default gte