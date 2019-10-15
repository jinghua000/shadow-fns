import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Just like `Array.prototype.join`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join  
 * 
 * @param {String} [separator]
 * @param {Array} data
 * @return {String} 
 * @category Native
 * @sign String -> Array -> String
 * @see split
 * @example
 * 
 * let arr = ['i', 'have', 'a', 'plan']
 * 
 * f.join(' ')(arr) // => 'i have a plan'
 */
const join = _nativeSelfFn('join')

export default join