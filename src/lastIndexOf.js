import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Like `lastIndexOf` method of `Array.prototype` and `String.prototype`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf  
 * 
 * @param {*} args
 * @param {Number} [fromIndex]
 * @param {Array|String} data
 * @return {Number}
 * @since 0.1.0
 * @category Native
 * @sign x -> a -> Number
 * @see indexOf
 * @example
 * 
 * const findIndexA = f.lastIndexOf('a')
 * 
 * findIndexA('abcabc') // => 3
 * findIndexA(['b', 'c', 'a', 'a']) // => 3
 * findIndexA(['b', 'c', 'd']) // => -1
 */
const lastIndexOf = _nativeSelfFn('lastIndexOf')

export default lastIndexOf