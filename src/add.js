import _curry2 from './internal/_curry2'

/**
 * Like `+`
 * 
 * The second parameter add the first 
 * 
 * @param {*} x 
 * @param {*} e
 * @return {Number|String}
 * @since 0.1.0
 * @category Logic, curry2
 * @sign a -> a -> a
 * @see subtract
 * @example
 * 
 * f.add(1)(2) // => 3
 * f.add('a')('b') // => 'ba'
 * f.add(undefined)(undefined) // => NaN
 */
const add = _curry2((x, e) => e + x)

export default add