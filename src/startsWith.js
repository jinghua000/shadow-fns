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
 * @category Native
 * @sign (String) -> String -> Boolean
 * @see endsWith
 * @example
 * 
 * let str = 'i have a plan'
 * 
 * f.startsWith('i have')(str) // => true
 */
const startsWith = _nativeSelfFn('startsWith')

export default startsWith