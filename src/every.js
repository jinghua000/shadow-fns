import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Just like `Array.prototype.every`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 * 
 * @param {Function} fn 
 * @param {Array} [thisArg] 
 * @param {Array} data
 * @return {Boolean}
 * @since 0.1.0
 * @category Native
 * @sign (a -> Boolean) -> [a] -> Boolean
 * @see some, none
 * @example
 * 
 * let everyGreaterThan3 = f.every(f.gt(3))
 * 
 * everyGreaterThan3([2, 3, 4]) // => false
 * everyGreaterThan3([4, 5, 6]) // => true
 */
const every = _nativeSelfFn('every')

export default every