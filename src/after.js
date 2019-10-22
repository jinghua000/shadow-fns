import _curry2 from './internal/_curry2'

/**
 * Merge a function to the supplied function and return a new function
 * 
 * When call the new function,
 * first call the `fn` then call the `fnx`
 * with the same arguments
 * 
 * New function's returns same as the origin function
 * 
 * @param {Function} fnx - After function
 * @param {Function} fn - Origin function
 * @return {Function}
 * @since 0.1.0
 * @category Function, curried
 * @sign (...x -> a) -> (...x -> b) -> (...x -> b)
 * @see before
 * @example
 * 
 * let fn = () => console.log('i am coming')
 * let fnx = () => console.log('i am after')
 *    
 * fn = f.after(fnx)(fn)
 * 
 * fn()
 * // logs: i am coming
 * // logs: i am after
 */
const after = _curry2((fnx, fn) => (...args) => { 
  let result = fn(...args)
  fnx(...args)

  return result
})

export default after