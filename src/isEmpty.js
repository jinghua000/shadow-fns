import equals from './equals'

/**
 * Check the element is equal with one of below
 * `undefined`, `null`, `''`, `[]`, `{}`
 * 
 * @param {*} e
 * @return {Boolean} 
 * @category Tools
 * @sign x -> Boolean
 * @see isNil
 * @example
 * 
 * f.isEmpty({}) // => true
 * f.isEmpty('') // => true
 * f.isEmpty([undefined]) // => false
 */
const isEmpty = e => [
  undefined, null, '', [], {}
].some(equals(e))

export default isEmpty