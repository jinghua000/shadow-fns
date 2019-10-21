import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Like `slice` method of `Array.prototype` and `String.prototype`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice  
 * 
 * @param {Number} [begin]
 * @param {Number} [end]
 * @param {Array|String} data
 * @return {Array|String}
 * @since 0.1.0
 * @category Native
 * @sign (Number, Number) -> a -> a
 * @example
 *    
 * let slice2 = f.slice(2, 4)
 * 
 * slice2([1, 2, 3, 4, 5]) // => [3, 4]
 * slice2('abced') // => 'ce'
 */
const slice = _nativeSelfFn('slice')

export default slice