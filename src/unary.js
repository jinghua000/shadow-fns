import nAry from './nAry'

/**
 * Pass the first parameters to supplied function and ignore others
 * 
 * @param {Function} fn
 * @return {Function}
 * @category Function
 * @sign ((a, b, ..., z) -> result) -> (a -> result)
 * @see binary, uAry
 * @example
 * 
 * let arr = [1, 2, 3]
 * 
 * arr.map(parseInt) // => [1, NaN, NaN]
 * arr.map(f.unary(parseInt)) // => [1, 2, 3]
 */
const unary = nAry(1)

export default unary