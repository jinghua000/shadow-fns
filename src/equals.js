import _curry2 from './internal/_curry2'
import type from './type'
import keys from './keys'

/**
 * Check every element strict equal by `===`
 * 
 * Support `[]` and `{}`
 * 
 * Also `NaN` considered the same
 * 
 * **NOTE:** Not support prototype chain
 * 
 * @param {*} x 
 * @param {*} e 
 * @return {Boolean}
 * @since 0.1.0
 * @category Logic, curry2
 * @sign a -> b -> Boolean
 * @see eq
 * @example 
 *    
 * f.equals([1, 2, 3])([1, 2, 3]) // => true
 * f.equals([1, 2, 3])([1, 2, '3']) // => false
 * f.equals({ a: 123 })({ a: 123 }) // => true
 */
const equals = _curry2((x, e) => {
  if (e === x) return true

  const t1 = type(e)
  const t2 = type(x)

  if (t1 === 'Array' && t2 === 'Array') {
    const length = e.length

    if (length !== x.length) return false

    for (let i = 0; i < length; i++) {
      if (!equals(x[i], e[i])) return false
    }

    return true
  }

  if (t1 === 'Object' && t2 === 'Object') {
    const _keys = keys(e)
    const length = _keys.length

    if (length !== keys(x).length) return false

    for (const k of _keys) {
      if (!equals(x[k], e[k])) return false
    }

    return true
  }

  return e !== e && x !== x
})

export default equals