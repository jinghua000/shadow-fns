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
 * @category Object, curry2
 * @sign x -> Object -> x
 * @see props, propOr, propEq
 * @example
 * 
 * const a = { a: 1, b: 0 }
 * const b = { a: 2 }
 * const getA = f.prop('a')
 * const getB = f.prop('b')
 * 
 * getA(a) // => 1
 * getA(b) // => 2
 * getB(b) // => undefined
 */
const prop = _curry2((key, obj) => obj[key])

export default prop