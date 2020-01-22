import _curry3 from './internal/_curry3'

/**
 * Read the key of object
 * 
 * Check the corresponding value is equal with supplied val
 * 
 * Use `===`
 * 
 * @param {*} key 
 * @param {*} val 
 * @param {Object} obj
 * @return {*}
 * @since 0.1.0
 * @category Object, curry3
 * @sign (a, b) -> Object -> Boolean
 * @see prop, propOr
 * @example
 * 
 * const checkEq = f.propEq('a', 123)
 * const obj1 = { a: 123 }
 * const obj2 = { a: 234 }
 * 
 * checkEq(obj1) // => true
 * checkEq(obj2) // => false
 */
const propEq = _curry3((key, val, obj) => obj[key] === val)

export default propEq