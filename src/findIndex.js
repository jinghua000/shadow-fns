import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Just like `Array.prototype.findIndex`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 * 
 * @param {Function} fn
 * @param {Array} [thisArg]
 * @param {Array} data
 * @return {Number}
 * @category Native
 * @sign (a -> Boolean) -> [a] -> Number
 * @see find
 * @example
 * 
 * let firstIndexBiggerThan2 = f.findIndex(f.gt(2))
 * let arr = [2, 3, 4, 5]
 * 
 * firstIndexBiggerThan2(arr) // => 1
 */
const findIndex = _nativeSelfFn('findIndex')

export default findIndex