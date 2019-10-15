import nAry from './nAry'

/**
 * Pass the first two parameters to supplied function and ignore others
 * 
 * @param {Function} fn
 * @return {Function}
 * @category Function
 * @sign ((a, b, ..., z) -> result) -> ((a, b) -> result)
 * @see unary, uAry
 * @example
 * 
 * let printThree = (a, b, c) => [a, b, c]
 * printThree(1, 2, 3) // => [1, 2, 3]
 * 
 * let printTwo = f.binary(printThree)
 * printTwo(1, 2, 3) // => [1, 2, undefined]
 */
const binary = nAry(2)

export default binary