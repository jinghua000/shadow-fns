/**
 * Okay, this method just like `Object.prototype.hasOwnProperty.call`
 * 
 * @param {*} args 
 * @return {Boolean}
 * @sign x -> Boolean
 * @see has
 */
const _has = (...args) => Object.prototype.hasOwnProperty.call(...args)

export default _has