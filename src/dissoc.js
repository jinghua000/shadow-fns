import tap from './tap'
import merge from './merge'
import _curry2 from './internal/_curry2'

/**
 * Return a new object (shallow copy) which delete the key
 * 
 * @param {*} key 
 * @param {Object} obj 
 * @return {Object}
 * @since 0.1.0
 * @category Object, curry2
 * @sign x -> Object -> Object
 * @see dissoc
 * @example
 * 
 * let obj = { a: 123, b: 234 }
 * 
 * f.dissoc('b')(obj) // => { a: 123 }
 */
const dissoc = _curry2(
  (key, obj) => tap(_obj => delete _obj[key], merge(obj))
)

export default dissoc