import _curry2 from './internal/_curry2'

/**
 * Check the supplied parameters is satisfied both of the two function
 * 
 * First sceond, then first, like `fn2 && fn1`
 * 
 * @param {Function} fn1 
 * @param {Function} fn2 
 * @param {...*} args
 * @return {*}
 * @since 0.1.0
 * @category Tools, curried
 * @sign (...x -> a) -> (...x -> b) -> (...x -> a | b)
 * @see either, everyPass
 * @example
 * 
 * let isBetween = f.both(f.gt(5), f.lt(10))
 * isBetween(8) // => true
 * isBetween(11) // => false
 */
const both = _curry2((fn1, fn2) => (...args) => fn2(...args) && fn1(...args))

export default both