/**
 * Call a part of function and return a new function
 * 
 * Similar to `f.curry`
 * 
 * @param {Function} fn 
 * @param {...*} args
 * @return {Function}
 * @since 0.1.0
 * @category Function
 * @sign ((a, b, ..., z) -> res) -> (a, b, ..., n) -> (o, p, ..., z) -> res
 * @see curry, partialRight
 * @example
 * 
 * const sum = (a, b, c) => a + b + c
 * const sumAB = f.partial(sum)('a', 'b')
 * 
 * sumAB('c') // => 'abc'
 * sumAB('d') // => 'abd'
 */
const partial = fn => (...args) => (...args2) => fn(...args, ...args2)

export default partial