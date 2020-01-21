/**
 * Use `Object.assign` to merge the objects passed and return a new object
 * 
 * **NOTE:** Not support prototype chain
 * 
 * **NOTE:** Shallow copy
 * 
 * @param  {...Object} args 
 * @return {Object}
 * @since 0.1.0
 * @category Object
 * @sign ({ k: a }, { k: b }, ..., { k: n }) -> { k: n }
 * @example
 * 
 * const obj1 = { a: 123 }
 * const obj2 = { b: 234 }
 * 
 * f.merge(obj1, obj2) // => { a: 123, b: 234 }
 */
const merge = (...args) => Object.assign({}, ...args)

export default merge