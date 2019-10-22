/**
 * Return the parameter passed and do nothing
 * 
 * It will be useful in some special case
 * 
 * @param {*} x 
 * @return {*}
 * @since 0.1.0
 * @category Tools
 * @sign a -> a
 * @see always
 * @example
 * 
 * let obj = {}
 * 
 * f.identity(10) // => 10
 * f.identity(obj) === obj // => true
 */
const identity = x => x

export default identity