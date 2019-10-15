/**
 * Just like `String.prototype.trim`
 * 
 * Return a new string
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 * 
 * @param {String} str 
 * @return {String}
 * @category Native
 * @sign String -> String
 * @example
 * 
 * let str = ' i have a plan '
 * 
 * f.trim(str) // => 'i have a plan'
 */
const trim = str => str.trim()

export default trim