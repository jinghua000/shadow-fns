import _curryN from './internal/_curryN'

/**
 * Return a curried equivalent function  
 * 
 * **NOTE:** Not support rest parameters  
 * **NOTE:** Not support default parameters  
 * 
 * @param {Function} fn 
 * @return {Function}
 * @since 0.1.0
 * @category Function
 * @sign ((a, b, ..., z) -> result) -> a -> b -> ... -> z -> result
 * @see curryN, partial
 * @example
 * 
 * let fn = (a, b, c, d) => a + b + c + d
 * fn = f.curry(fn)
 * 
 * fn(1, 2, 3, 4) // => 10
 * fn(1, 2)(3, 4) // => 10
 * fn(1, 2, 3)(4) // => 10
 * fn(1)(2, 3, 4) // => 10
 * fn(1)(2)(3)(4) // => 10
 */
const curry = fn => _curryN(fn.length)(fn)

export default curry