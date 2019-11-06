import _curry2 from './internal/_curry2'

/**
 * Like `&&`
 * 
 * Return the second if the second parameter is not true
 * 
 * Return the first if the second parameter is true
 * 
 * @param {*} x
 * @param {*} e
 * @return {*}
 * @since 0.1.0
 * @category Logic, curry2
 * @sign a -> b -> b | a
 * @see or
 * @example
 * 
 * f.and(true)(false) // => false
 * f.and(10)(20) // => 10
 * f.and('aaa')(0) // => 0
 */
const and = _curry2(
  (x, e) => e && x
)

export default and