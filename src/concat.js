import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Just like the `concat` method of `Array.prototype` and `String.prototype`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat  
 * 
 * @param {...(Array|String)} args
 * @param {Array|String} data
 * @return {Array|String}
 * @category Native
 * @sign ...a -> a -> a
 * @example
 * 
 * let str = 'i have'
 * f.concat(' a', ' plan')(str) // => 'i have a plan'
 * 
 * let arr = [1, 2, 3]
 * f.concat(4, [5])(arr) // => [1, 2, 3, 4, 5]
 */
const concat = _nativeSelfFn('concat')

export default concat