import uncurryN from './uncurryN'

/**
 * Change a curried function to an uncurry equivalent function
 * 
 * @param {Function} fn 
 * @return {Function}
 * @sign (a -> b -> ... -> z -> result) -> (a, b, ..., z) -> result
 * @category Function
 * @see uncurryN, curry
 * @example
 * 
 * let add = a => b => c => a + b + c
 * let fn = f.uncurry(add)
 * 
 * fn('a', 'b', 'c') // => 'abc'
 */
const uncurry = fn => (...args) => uncurryN(args.length, fn)(...args)


export default uncurry