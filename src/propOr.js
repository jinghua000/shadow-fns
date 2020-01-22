import _curry3 from './internal/_curry3'

/**
 * Supply the key and default value
 * 
 * Read the key of the object
 * 
 * If true return the corresponding value
 * 
 * Else return the default value
 * 
 * Like `obj[key] || def`
 * 
 * @param {*} key 
 * @param {*} def 
 * @param {Object} obj
 * @return {*}
 * @since 0.1.0
 * @category Object, curry3
 * @sign (a, b) -> Object -> a | b
 * @see prop, propEq
 * @example
 * 
 * const readA = f.propOr('a', false)
 * 
 * readA({ a: 123 }) // => 123
 * readA({}) // => false
 */
const propOr = _curry3((key, def, obj) => obj[key] || def)

export default propOr
