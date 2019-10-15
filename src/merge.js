/**
 * Use `Object.assign` to merge the objects passed and return a new object
 * 
 * **NOTE:** Not support prototype chain
 * 
 * **NOTE:** Shallow copy
 * 
 * @param  {...Object} args 
 * @return {Object}
 * @category Object
 * @sign (Object, ...) -> Object
 * @example
 * 
 * let obj1 = { a: 123 }
 * let obj2 = { b: 234 }
 * 
 * f.merge(obj1, obj2) // => { a: 123, b: 234 }
 */
const merge = (...args) => Object.assign({}, ...args)

export default merge