import _curry2 from './internal/_curry2'

/**
 * Select the values by the supplied keys 
 * 
 * Return an array
 * 
 * @param {Array} keys 
 * @param {Object} obj
 * @return {Array}
 * @since 0.1.0
 * @category Object, curry2
 * @sign Array -> Object -> Array
 * @see prop
 * @example
 * 
 * const obj = { a: 1, b: 2, c: 3 }
 * 
 * f.props(['a', 'b', 'c', 'd'])(obj)
 * // => [1, 2, 3, undefined]
 */
const props = _curry2((keys, obj) => keys.map(key => obj[key]))

export default props