import _curry3 from './internal/_curry3'
import path from './path'

/**
 * Read the path of object by `f.path`
 * 
 * If not true return default value
 * 
 * @param {Array} arr 
 * @param {*} def 
 * @param {Object} obj
 * @return {*}
 * @since 0.1.0
 * @category Object, curry3
 * @sign (Array, a) -> Object -> x | a
 * @see path, pathEq
 * @example
 * 
 * const readPathOr = f.pathOr(['a', 'a'], 'no!')
 * 
 * readPathOr({ a: 123 }) // => no!
 * readPathOr({ a: { a: 'yes' } }) // => yes!
 */
const pathOr = _curry3((arr, def, obj) => path(arr)(obj) || def)

export default pathOr