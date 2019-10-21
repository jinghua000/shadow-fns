/**
 * Check the element is `undefined` or `null`
 * 
 * @param {*} e
 * @return {Boolean} 
 * @since 0.1.0
 * @category Tools
 * @sign x -> Boolean
 * @see isExist, isEmpty
 * @example
 * 
 * f.isNil(null) // => true
 * f.isNil(undefined) // => true
 * f.isNil('undefined') // => false
 */
const isNil = e => e === undefined || e === null

export default isNil