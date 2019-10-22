/**
 * Equal with `Object.keys`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 * 
 * @param {Object} obj 
 * @return {Array}
 * @since 0.1.0
 * @category Native
 * @sign Object -> Array
 * @see values
 * @example
 * 
 * let obj = { a: 1, b: 2, c: 3 }
 * 
 * keys(obj) // => ['a', 'b', 'c']
 */
const keys = Object.keys

export default keys