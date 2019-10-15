import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Just like `Array.prototype.some`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 * 
 * @param {Function} fn 
 * @param {Array} [thisArg] 
 * @param {Array} data
 * @return {Boolean}
 * @category Native
 * @sign (a -> Boolean) -> [a] -> Boolean
 * @see every, none
 * @example
 * 
 * let someGreaterThan3 = f.some(f.gt(3))
 * 
 * someGreaterThan3([2, 3, 4]) // => true
 * someGreaterThan3([1, 2, 3]) // => false
 */
const some = _nativeSelfFn('some')

export default some