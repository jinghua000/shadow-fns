/**
 * Return the last element of the data
 * 
 * @param {String|Array} list
 * @return {*}
 * @since 0.1.0
 * @category Tools
 * @sign String -> String
 * @sign [a] -> a
 * @see first, nth
 * @example
 * 
 * const str = 'abcdefg'
 * f.last(str) // => g
 * 
 * const arr = [1, 2, 3, 4, 5]
 * f.last(arr) // => 5
 */
const last = list => list.slice(-1)[0]

export default last