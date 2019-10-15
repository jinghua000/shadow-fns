import _curry2 from './internal/_curry2'

/**
 * Like `||`
 * 
 * Return the second if the second parameter is true
 * 
 * Return the first if the second parameter is not true
 * 
 * @param {*} x
 * @param {*} e
 * @return {*}
 * @category Logic, curried
 * @sign a -> b -> b | a
 * @see and
 * @example
 * 
 * f.or(true)(false) // => true
 * f.or(10)(20) // => 20
 * f.or('aaa')(0) // => 'aaa'
 */
const or = _curry2(
  (x, e) => e || x
)

export default or