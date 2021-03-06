import _curry2 from './internal/_curry2'
import merge from './merge'

/**
 * Pick some keys of object
 * 
 * Return a new object with the corresponding key and value 
 * 
 * **NOTE:** Shallow copy
 * 
 * @param {Array} keys 
 * @param {Object} obj
 * @return {Object}
 * @since 0.1.0
 * @category Object, curry2
 * @sign [k] -> { k: v } -> { k: v }
 * @see pickBy, omit
 * @example
 * 
 * const pickAB = f.pick(['a', 'b'])
 * const obj = { a: 123, b: 234, c: 345 }
 * 
 * pickAB(obj) // => { a: 123, b: 234 }
 */
const pick = _curry2((keys, obj) => merge(
  ...keys.map(key => ({ [key]: obj[key] }))
))

export default pick