import _curry2 from './internal/_curry2'

/**
 * Return a equivalent function with `n` curried parameters
 * 
 * Usual used in rest parameters
 * 
 * @param {Number} n 
 * @param {Function} fn 
 * @return {Function}
 * @since 0.1.0
 * @category Function, curried
 * @sign Number -> ((a, b, ..., z) -> result) -> a -> b -> ... -> z -> result
 * @see curry, partial
 * @example
 * 
 * let join = (...args) => args.join('')
 * join(1, 2, 3, 4) // => '1234'
 * join(1, 2, 3) // => '123'
 * 
 * join3 = f.curryN(3)(join)
 * join3(1, 2, 3) // => '123'
 * join3(1, 2)(3) // => '123'
 * join3(1)(2, 3) // => '123'
 * join3(1)(2)(3) // => '123'
 */
const curryN = _curry2((n, fn) => {
  const curried = (...args) => 
    args.length < n
      ? (...args2) => curried(...args, ...args2)
      : fn(...args)
  return curried
})

export default curryN