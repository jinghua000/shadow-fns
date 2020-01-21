import _curry2 from './internal/_curry2'

/**
 * Pass the first `n` parameters to supplied function and ignore others
 * 
 * @param {Number} n 
 * @param {Function} fn
 * @return {Function}
 * @since 0.1.0
 * @category Function, curry2
 * @see unary, binary
 * @sign Number -> ((a, b, ..., z) -> result) -> ((a, b, ..., n) -> result)
 * @example
 * 
 * const printThree = (a, b, c) => [a, b, c]
 * printThree(1, 2, 3) // => [1, 2, 3]
 * 
 * const printTwo = f.nAry(2)(printThree)
 * printTwo(1, 2, 3) // => [1, 2, undefined]
 */
const nAry = _curry2((n, fn) => (...args) => fn(...args.slice(0, n)))

export default nAry