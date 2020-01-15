import _curry2 from './internal/_curry2'

/**
 * Merge a function to the supplied function and return a new function
 * 
 * When call the new function,
 * first call the `fnx` then call the `fn`
 * with the same arguments
 * 
 * New function's returns same as the origin function
 * 
 * @param {Function} fnx - Before function
 * @param {Function} fn - Origin function
 * @return {Function}
 * @since 0.1.0
 * @category Function, curry2
 * @sign (...x -> a) -> (...x -> b) -> (...x -> b)
 * @see after
 * @example
 * 
 * const fn1 = () => console.log('i am fn1')
 * const fn2 = () => console.log('i am fn2')
 * 
 * fn = f.before(fn1)(fn2)
 * 
 * fn()
 * // logs: i am fn1
 * // logs: i am fn2
 */
const before = _curry2((fnx, fn) => (...args) => { 
  fnx(...args)

  return fn(...args) 
})

export default before