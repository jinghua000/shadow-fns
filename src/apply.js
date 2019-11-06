import _curry2 from './internal/_curry2'

/**
 * Pass the array to the function 
 * and function will called by the rest arguments of array
 * 
 * Similar to `Function.prototype.apply`, but without context
 *  
 * @param {Function} fn 
 * @param {Array} args
 * @return {*}
 * @since 0.1.0
 * @category Function, curry2
 * @sign (...x -> a) -> [x] -> a
 * @see call
 * @example 
 * 
 * let print = (...args) => args
 * let fn = f.apply(print)
 * 
 * fn([1, 2, 3]) // => [1, 2, 3]
 */
const apply = _curry2((fn, args) => fn(...args))

export default apply