import _curry2 from './internal/_curry2'
import isNil from './isNil'

/**
 * Read the path of the object
 * 
 * If key not exist will return `undefined`
 * 
 * If not pass path will return object self
 * 
 * @param {Array} arr 
 * @param {Object} obj
 * @return {*} 
 * @category Object, curried
 * @sign Array -> Object -> x
 * @see pathOr, pathEq
 * @example
 * 
 * let readPath = f.path(['a', 'a'])
 * let obj1 = { a: { a: 123 } }
 * let obj2 = { a: { b: 123 } }
 * 
 * readPath(obj1) // => 123
 * readPath(obj2) // => undefined
 */
const path = _curry2((arr, obj) => {
  let val = obj

  for (let k of arr) {
    if (isNil(val)) return
    val = val[k]
  }

  return val
})

export default path