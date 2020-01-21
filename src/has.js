import _curry2 from './internal/_curry2'
import isNil from './isNil'
import _has from './internal/_has'

/**
 * Check Object has the supplied key
 * 
 * Use `Object.prototype.hasOwnProperty`
 * 
 * @param {*} key 
 * @param {Object} obj 
 * @return {Boolean}
 * @since 0.1.0
 * @category Object, curry2
 * @sign x -> Object -> Boolean
 * @see hasPath
 * @example
 * 
 * const hasA = f.has('a')
 * 
 * hasA({ a: 123 }) // => true
 * hasA({ b: 123 }) // => fasle
 */
const has = _curry2((key, obj) => !isNil(obj) && _has(obj, key))

export default has