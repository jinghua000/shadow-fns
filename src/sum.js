/**
 * Sum the array
 * 
 * Use `Array.prototype.reduce`
 * 
 * @param {Array} arr 
 * @return {*}
 * @since 0.1.0
 * @category Array
 * @sign [a] -> a
 * @example
 * 
 * f.sum([1, 2, 3, 4]) // => 10
 * f.sum(['a', 'b', 'c', 'd']) // => abcd
 */
const sum = arr => arr.reduce((acc, cur) => acc += cur)

export default sum