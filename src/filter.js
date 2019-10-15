import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Just like `Array.prototype.filter`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * 
 * @param {Function} fn
 * @param {Array} [thisArg]
 * @param {Array} data
 * @return {Array}
 * @category Native
 * @sign (a -> Boolean) -> [a] -> [a]
 * @see reject
 * @example
 *    
 * let greaterThan3 = f.filter(f.gt(3))
 * let arr = [1, 2, 3, 4, 5]
 * 
 * greaterThan3(arr) // => [4, 5]
 */
const filter = _nativeSelfFn('filter')

export default filter