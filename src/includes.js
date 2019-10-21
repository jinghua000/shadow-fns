import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Just like `includes` of `Array.prototype` and `String.prototype`  
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes  
 * 
 * @param {*} args
 * @param {Number} [position]
 * @param {Array|String} data
 * @return {Boolean}
 * @since 0.1.0
 * @category Native
 * @sign x -> [a] -> Boolean
 * @sign x -> a -> Boolean
 * @example
 * 
 * let includes = f.includes('yes')
 * 
 * includes(['i', 'say', 'yes', '!']) // => true
 * includes('i say yes!') // => true
 * includes('i say no!') // => false
 */
const includes = _nativeSelfFn('includes')

export default includes