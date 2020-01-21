import _curry2 from './internal/_curry2'
import tap from './tap'

/**
 * Like `Array.prototype.map` for `{}`
 * 
 * Supplied a function and object
 * 
 * Return a new object, 
 * pass every object value to function
 * and set them as the returns of function
 * 
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @since 0.1.0
 * @category Object, curry2
 * @sign (a -> b) -> { k: a } -> { k: b }
 * @example 
 * 
 * const obj = { a: 1, b: 2, c: 3 }
 * const everyAdd1 = f.mapObj(f.add(1))
 * 
 * everyAdd1(obj) // => { a: 2, b: 3, c: 4 }
 */
const mapObj = _curry2((fn, obj) => tap(
  _obj => Object.keys(obj).forEach(
    k => _obj[k] = fn(obj[k])
  ), {}
))

export default mapObj