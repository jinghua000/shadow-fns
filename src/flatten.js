/**
 * Deep flatten the array
 * 
 * Return a new array
 * 
 * **NOTE:** Shallow Copy
 * 
 * @param {Array} arr 
 * @return {Array}
 * @since 0.1.0
 * @category Array
 * @sign Array -> Array
 * @example
 * 
 * const arr = [1, [2], [[3, 4], 5]]
 * 
 * f.flatten(arr) // => [1, 2, 3, 4, 5]
 */
const flatten = arr => arr.reduce(
  (acc, cur) => acc.concat(
    Array.isArray(cur) ? flatten(cur) : cur
  ), []
)

export default flatten