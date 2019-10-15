import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Just like `String.prototype.match`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match  
 * 
 * @param {RegExp} args
 * @param {String} str
 * @return {Array}
 * @category Native
 * @sign RegExp -> String -> Array
 * @see test
 * @example
 * 
 * let matchAll = f.match(/\{.*?\}/g)
 * 
 * matchAll('{aa}-{bb}-{cc}')
 * // => ['{aa}', '{bb}', '{cc}']
 */
const match = _nativeSelfFn('match')

export default match