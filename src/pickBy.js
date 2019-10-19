import _curry2 from './internal/_curry2'
import keys from './keys'
import tap from './tap'

/**
 * Pass every `value` and `key` of the object to the supplied function,  
 * if return true, select corresponding key and value.  
 * 
 * Return a new object.
 * 
 * **NOTE:** Shallow copy  
 * **NOTE:** Not support prototype chain  
 * 
 * @param {Function} fn 
 * @param {Object} obj
 * @return {Object}
 * @category Object, curried
 * @sign ((v, k) -> Boolean) -> { k: v } -> { k: v }
 * @see pick
 * @example
 * 
 * let obj = { a: 1, b: 2, c: 3}
 * let pickBy = f.pickBy(f.gte(2))
 * 
 * pickBy(obj) // => { b: 2, c: 3 }
 */
const pickBy = _curry2((fn, obj) => tap(
  _obj => keys(obj).forEach(
    key => {
      let val = obj[key]
      fn(val, key) && (_obj[key] = val)
    }
  ), {}
))

export default pickBy