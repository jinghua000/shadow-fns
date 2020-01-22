/**
 * Call a part of function and return a new function like `f.partial`
 * 
 * But arguments start at right (arguments order still left-to-right)
 * 
 * @param {Function} fn 
 * @param {...*} args
 * @return {Function}
 * @since 0.1.0
 * @category Function
 * @sign ((a, b, ..., z) -> res) -> (o, p, ..., z) -> (a, b, ..., n) -> res
 * @see partial
 * @example
 * 
 * const sum = (a, b, c) => a + b + c
 * const sumBeforeAB = f.partial(sum)('a', 'b')
 * 
 * sumAB('c') // => 'cab'
 * sumAB('d') // => 'dab'
 */
const partialRight = fn => (...args) => (...args2) => fn(...args2, ...args)

export default partialRight