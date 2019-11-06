import _curry2 from './internal/_curry2'

/**
 * Return the nth element of the data
 * 
 * Support negative number
 * 
 * @param {Number} index 
 * @param {String|Array} list
 * @return {*}
 * @since 0.1.0
 * @category Tools, curry2
 * @sign Number -> String -> String
 * @sign Number -> [a] -> a
 * @see first, last
 * @example
 * 
 * let str = 'abcdefg'
 * f.nth(3)(str) // => d
 * f.nth(-2)(str) // => f
 * 
 * let arr = [1, 2, 3, 4, 5]
 * f.nth(5)(arr) // => undefined
 * f.nth(-1)(arr) // => 5
 */
const nth = _curry2((index, list) => list[index < 0 ? list.length + index : index])

export default nth