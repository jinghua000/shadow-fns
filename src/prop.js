import _curry2 from './internal/_curry2'

/**
 * Read the key of the object
 * 
 * Like `obj[key]`
 * 
 * @param {*} key
 * @param {Object} obj
 * @return {*}
 * @since 0.1.0
 * @category Object, curried
 * @sign x -> Object -> x
 * @see props, propOr, propEq
 * @example
 * 
 * let a = { a: 1, b: 0 }
 * let b = { a: 2 }
 * let getA = f.prop('a')
 * let getB = f.prop('b')
 * 
 * getA(a) // => 1
 * getA(b) // => 2
 * getB(b) // => undefined
 */
const prop = _curry2((key, obj) => obj[key])

export default prop