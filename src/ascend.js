import _curry3 from './internal/_curry3'
import asc from './asc'

/**
 * Pass a function and sort by the returns in ascending
 * 
 * @param {Function} fn
 * @param {*} a 
 * @param {*} b 
 * @return {Number}
 * @since 0.1.0
 * @category Tools, curried
 * @sign (a -> x) -> a -> a -> Number
 * @see asc, descend
 * @example
 * 
 * const users = [
 *   { name: 'human', age: 12 },
 *   { name: 'cat', age: 7 },
 *   { name: 'dog', age: 5 },
 * ]
 * 
 * const sortByAge = f.sort(f.ascend(f.prop('age')))
 * 
 * sortByAge(users)
 * // =>
 * // [
 * //   { name: 'dog', age: 5 },
 * //   { name: 'cat', age: 7 },
 * //   { name: 'human', age: 12 },
 * // ]
 */
const ascend = _curry3((fn, a, b) => asc(fn(a), fn(b)))

export default ascend