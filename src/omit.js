import _curry2 from './internal/_curry2'
import tap from './tap'

/**
 * Select the keys of the supplied object
 * which not exists in supplied array
 * 
 * **NOTE:** Shallow copy
 * 
 * @param {Array} keys 
 * @param {Object} obj
 * @return {Object}
 * @since 0.1.0
 * @category Object, curry2
 * @sign [k] -> { k: v } -> { k: v }
 * @see pick
 * @example
 * 
 * const omit = f.omit(['a', 'b'])
 * const obj = { a: 1, b: 2, c: 3 }
 * 
 * omit(obj) // => { c: 3 }
 */
const omit = _curry2(
  (keys, obj) => tap(
    _obj => Object.keys(obj).forEach(
      key => keys.includes(key) || (_obj[key] = obj[key])
    ), {}
  )
)

export default omit