/**
 * Return a new array
 * 
 * Select unique elements in the array with `Set`
 * 
 * @param {Array} arr 
 * @return {Array}
 * @category Array
 * @since 0.1.0
 * @sign Array -> Array
 * @see difference, intersection, union
 * @example
 * 
 * const arr = [1, 2, 2, NaN, NaN]
 * 
 * f.uniq(arr) // => [1, 2, NaN]
 */
const uniq = arr => Array.from(new Set(arr))

export default uniq