import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Just like `String.prototype.split`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split  
 * 
 * @param {String|RegExp} [separator]
 * @param {Number} [limit]
 * @param {String} str
 * @return {Array}
 * @since 0.1.0
 * @category Native
 * @sign (String | RegExp) -> String -> Array
 * @see join
 * @example
 * 
 * const str = 'i have a plan'
 * const splitWithBlank = f.split(' ')
 * 
 * splitWithBlank(str) // => ['i', 'have', 'a', 'plan']
 */
const split = _nativeSelfFn('split')

export default split