import _curry3 from './internal/_curry3'
import desc from './desc'

/**
 * Pass a function and sort by the returns in descending
 * 
 * @param {Function} fn 
 * @param {*} a 
 * @param {*} b 
 * @return {Number}
 * @since 0.1.0
 * @category Tools, curried
 * @sign (a -> x) -> a -> a -> Number
 * @see desc, ascend
 * @example
 * 
 * const users = [
 *   { name: 'dog', age: 5 },
 *   { name: 'cat', age: 7 },
 *   { name: 'human', age: 12 },
 * ]
 * 
 * const sortByAgeDesc = f.sort(f.descend(f.prop('age')))
 * 
 * sortByAgeDesc(users)
 * // =>
 * // [
 * //   { name: 'human', age: 12 },
 * //   { name: 'cat', age: 7 },
 * //   { name: 'dog', age: 5 },
 * // ]
 */
const descend = _curry3((fn, a, b) => desc(fn(a), fn(b)))

export default descend