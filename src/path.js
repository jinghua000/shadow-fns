import _curry2 from './internal/_curry2'
import isNil from './isNil'

/**
 * Read the path of the object
 * 
 * If key not exist will return `undefined`
 * 
 * If not pass path will return object self
 * 
 * Can also handle array.
 * 
 * @param {Array} arr 
 * @param {Object} obj
 * @return {*} 
 * @since 0.1.0
 * @category Object, curry2
 * @sign Array -> Object -> x
 * @see pathOr, pathEq
 * @example
 * 
 * const readPath = f.path(['a', 'a'])
 * const obj1 = { a: { a: 123 } }
 * const obj2 = { a: { b: 123 } }
 * 
 * readPath(obj1) // => 123
 * readPath(obj2) // => undefined
 */
const path = _curry2((arr, obj) => {
  let val = obj

  for (let i = 0; i < arr.length; i++) {
    if (isNil(val)) return
    val = val[arr[i]]
  }

  return val
})

export default path