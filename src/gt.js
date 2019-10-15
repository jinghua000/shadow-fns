import _curry2 from './internal/_curry2'

/**
 * Like `>`
 * 
 * Check the second parameter is greater than the first
 * 
 * @param {*} x 
 * @param {*} e 
 * @return {Boolean}
 * @category Logic, curried
 * @sign a -> a -> Boolean
 * @see lt, gte
 * @example
 * 
 * let greaterThan5 = f.gt(5)
 * 
 * greaterThan5(6) // => true
 * greaterThan5(5) // => false
 * greaterThan5(4) // => false
 */
const gt = _curry2((x, e) => e > x)

export default gt