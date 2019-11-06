import _curry3 from './internal/_curry3'
import path from './path'

/**
 * Read the path of the object
 * 
 * Check the returns is equal with the supplied value
 * 
 * @param {Array} arr 
 * @param {*} val 
 * @param {Object} obj
 * @return {Boolean}
 * @since 0.1.0
 * @category Object, curry3
 * @sign (Array, x) -> Object -> Boolean
 * @see path, pathOr
 * @example
 * 
 * let checkPath = f.pathEq(['a', 'a'], 123)
 * 
 * checkPath({ b: 999 }) // => false
 * checkPath({ a: { a: 123 } }) // => true
 */
const pathEq = _curry3((arr, val, obj) => path(arr)(obj) === val)

export default pathEq