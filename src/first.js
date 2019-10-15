/**
 * Return the first element of the data
 * 
 * @param {String|Array} list
 * @return {*}
 * @category Tools
 * @sign String -> String 
 * @sign [a] -> a
 * @see last, nth
 * @example
 * 
 * let str = 'abcdefg'
 * f.first(str) // => a
 * 
 * let arr = [1, 2, 3, 4, 5]
 * f.first(arr) // => 1
 */
const first = list => list[0]

export default first