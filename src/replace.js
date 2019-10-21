import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Just like `String​.prototype​.replace`
 * 
 * Will not change supplied string
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 * 
 * @param {String|RegExp} arg1
 * @param {String|Function} arg2
 * @param {String} str
 * @return {String}
 * @since 0.1.0
 * @category Native
 * @sing (String | RegExp, String | Function) -> String ->String
 * @example
 * 
 * let replace = f.replace(/yes/, 'no')
 * 
 * replace('yes yes i will yes')
 * // => no no i will no
 */
const replace = _nativeSelfFn('replace')

export default replace