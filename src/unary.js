import _nAry from './internal/_nAry'

/**
 * Pass the first parameters to supplied function and ignore others
 * 
 * @param {Function} fn
 * @return {Function}
 * @since 0.1.0
 * @category Function
 * @sign ((a, b, ..., z) -> result) -> (a -> result)
 * @see binary, nAry
 * @example
 * 
 * const arr = [1, 2, 3]
 * 
 * arr.map(parseInt) // => [1, NaN, NaN]
 * arr.map(f.unary(parseInt)) // => [1, 2, 3]
 */
const unary = _nAry(1)

export default unary