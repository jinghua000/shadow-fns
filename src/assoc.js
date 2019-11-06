import tap from './tap'
import merge from './merge'
import _curry3 from './internal/_curry3'

/**
 * Return a new object (shallow copy) which associate the key and value 
 * 
 * @param {*} key 
 * @param {*} val 
 * @param {Object} obj 
 * @return {Object}
 * @since 0.1.0
 * @category Object, curry3
 * @sign x -> x -> Object -> Object
 * @see dissoc
 * @example
 * 
 * let obj = { a: 123 }
 * 
 * f.assoc('b', 234)(obj) // => { a: 123, b: 234 }
 */
const assoc = _curry3(
  (key, val, obj) => tap(_obj => _obj[key] = val, merge(obj))
)

export default assoc