import _curry2 from './internal/_curry2'

/**
 * Like `<`
 * 
 * Check the second parameter is less than the first
 * 
 * @param {*} x 
 * @param {*} e 
 * @return {Boolean}
 * @category Logic, curried
 * @sign a -> a -> Boolean
 * @see gt, lte
 * @example
 * 
 * let lessThan5 = f.lt(5)
 * 
 * lessThan5(6) // => false
 * lessThan5(5) // => false
 * lessThan5(4) // => true
 */
const lt = _curry2((x, e) => e < x)

export default lt