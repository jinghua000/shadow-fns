import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Like `indexOf` method of `Array.prototype` and `String.prototype`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf  
 * 
 * @param {*} args
 * @param {Number} [fromIndex]
 * @param {Array|String} data
 * @return {Number}
 * @since 0.1.0
 * @category Native
 * @sign x -> a -> Number
 * @see lastIndexOf
 * @example
 * 
 * let findIndexA = f.indexOf('a')
 * 
 * findIndexA('abcabc') // => 0
 * findIndexA(['b', 'c', 'a']) // => 2
 * findIndexA(['b', 'c', 'd']) // => -1
 */
const indexOf = _nativeSelfFn('indexOf')

export default indexOf