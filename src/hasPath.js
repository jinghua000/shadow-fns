import _curry2 from './internal/_curry2'
import has from './has'

/**
 * Check the object has the path
 * 
 * Check every element with `f.has`
 * 
 * @param {Array} arr 
 * @param {Object} obj 
 * @return {Boolean}
 * @since 0.1.0
 * @category Object, curry2
 * @sign Array -> Object -> Boolean
 * @see has
 * @example
 * 
 * const hasPath = f.hasPath(['a', 'a'])
 * 
 * hasPath({ a: { a: 123 } }) // => true
 * hasPath({ b: 123 }) // => false
 */
const hasPath = _curry2((arr, obj) => {
  let val = obj

  for (let i = 0; i < arr.length; i++) {
    const k = arr[i]
    if (!has(k, val)) return false
    val = val[k]
  }

  return true
})

export default hasPath