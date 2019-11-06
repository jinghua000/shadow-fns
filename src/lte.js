import _curry2 from './internal/_curry2'

/**
 * Like `<=`
 * 
 * Check the second parameter is less than or equal with the first
 * 
 * @param {*} x 
 * @param {*} e 
 * @return {Boolean}
 * @since 0.1.0
 * @category Logic, curry2
 * @sign a -> a -> Boolean
 * @see gte, lt
 * @example
 * 
 * let lessOrEqual5 = f.lte(5)
 * 
 * lessOrEqual5(6) // => false
 * lessOrEqual5(5) // => true
 * lessOrEqual5(4) // => true
 */
const lte = _curry2((x, e) => e <= x)

export default lte