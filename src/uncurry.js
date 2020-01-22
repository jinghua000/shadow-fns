import uncurryN from './uncurryN'

/**
 * Change a curried function to an uncurry equivalent function
 * 
 * @param {Function} fn 
 * @return {Function}
 * @since 0.1.0
 * @category Function
 * @sign (a -> b -> ... -> z -> result) -> (a, b, ..., z) -> result
 * @see uncurryN, curry
 * @example
 * 
 * const add = a => b => c => a + b + c
 * const fn = f.uncurry(add)
 * 
 * fn('a', 'b', 'c') // => 'abc'
 */
const uncurry = fn => (...args) => uncurryN(args.length, fn)(...args)


export default uncurry