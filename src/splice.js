import tap from './tap'

/**
 * Similar to `Array.prototype.splice`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 * 
 * But this function will not change the supplied array
 * 
 * Return changed array
 * 
 * **NOTE:** Shallow Copy
 * 
 * @param {Number} arg1
 * @param {Number} [arg2]
 * @param {...*} [arg3]
 * @param {Array} arr
 * @return {Array}
 * @since 0.1.0
 * @category Native
 * @sign (Number, Number, *, ...) -> Array -> Array
 * @example
 * 
 * let replaceTwo = f.splice(1, 2, 'two', 'two')
 * let arr = ['one', 'two', 'three', 'four']
 * 
 * replaceTwo(arr) // => ['one', 'two', 'two', 'four']
 */
const splice = (...args) => arr => tap(_arr => _arr.splice(...args), [].concat(arr))

export default splice