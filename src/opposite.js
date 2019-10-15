/**
 * Return a function and the returns of that is opposite to the function passed
 * 
 * @param {Function} fn 
 * @return {Function}
 * @category Function
 * @sign (...x -> result) -> (...x -> !result)
 * @example
 * 
 * let gt3 = f.gt(3)
 * let arr = [1, 2, 3, 4, 5]
 * 
 * arr.filter(gt3) // => [4, 5]
 * arr.filter(f.opposite(gt3)) // => [1, 2, 3]
 */
const opposite = fn => (...args) => !fn(...args)

export default opposite