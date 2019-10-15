/**
 * Check the tpye of element
 * 
 * Use `Object.prototype.toString`
 * 
 * @param {*} e 
 * @return {String}
 * @category Tools
 * @sign x -> String
 * @see is
 * @example
 * 
 * f.type([]) // => Array
 * f.type({}) // => Object
 * f.type('') // => String
 */
const type = e => Object.prototype.toString.call(e).replace(/^\[object\s(.*)\]$/, '$1')

export default type