import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Just Like `String.prototype.startsWith`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
 * 
 * @param {String} str
 * @param {Number} [length]
 * @param {String} data
 * @return {Boolean}
 * @since 0.1.0
 * @category Native
 * @sign (String) -> String -> Boolean
 * @see endsWith
 * @example
 * 
 * const str = 'i have a plan'
 * 
 * f.startsWith('i have')(str) // => true
 */
const startsWith = _nativeSelfFn('startsWith')

export default startsWith