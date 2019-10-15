/**
 * Read the `length` property of supplied parameter
 * 
 * @param {*} e 
 * @return {Number}
 * @category Tools
 * @sign x -> Number
 * @example
 * 
 * f.length([1, 2, 3]) // => 3
 * f.length('abc') // => 3
 */
const length = e => e.length

export default length