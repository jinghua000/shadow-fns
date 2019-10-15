import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Just Like `String.prototype.endsWith`  
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
 * 
 * @param {String} str
 * @param {Number} [length]
 * @param {String} data
 * @return {Boolean}
 * @category Native
 * @sign String -> String -> Boolean
 * @see startsWith
 * @example
 * 
 * let str = 'i have a plan'
 * 
 * f.endsWith('plan')(str) // => true
 */
const endsWith = _nativeSelfFn('endsWith')

export default endsWith