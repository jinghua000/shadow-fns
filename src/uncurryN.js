import _curry2 from './internal/_curry2'

/**
 * Change a curried function to an uncurry equivalent function
 * with `n` arugments
 * 
 * @param {Number} n
 * @param {Function} fn 
 * @return {Function}
 * @category Function, curried
 * @sign Number -> (a -> b -> ... -> n -> result) -> (a, b, ..., n) -> result
 * @see uncurry, curry
 * @example
 * 
 * let add = a => b => c => a + b + c
 * let fn = f.uncurryN(2)(add)
 * 
 * fn('a', 'b')('c') // => 'abc'
 */
const uncurryN = _curry2((n, fn) => (...args) => {
  let ret = fn

  for (let i = 0; i < n; i++) {
    ret = ret(args[i])
  }

  return ret
})

export default uncurryN