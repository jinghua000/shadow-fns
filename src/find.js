import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Just like `Array.prototype.find`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * 
 * @param {Function} fn
 * @param {Array} [thisArg]
 * @param {Array} data
 * @return {*}
 * @since 0.1.0
 * @category Native
 * @sign (a -> Boolean) -> [a] -> a
 * @see findIndex
 * @example
 * 
 * const firstBiggerThan2 = f.find(f.gt(2))
 * const arr = [2, 3, 4, 5]
 * 
 * firstBiggerThan2(arr) // => 3
 */
const find = _nativeSelfFn('find')

export default find