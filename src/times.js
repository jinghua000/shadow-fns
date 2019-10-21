import _curry2 from './internal/_curry2'

/**
 * Call the supplied function for `n` times
 * and push the returns to an array
 * 
 * @param {Number} n
 * @param {Function} fn
 * @return {Function}
 * @since 0.1.0
 * @category Tools, curried
 * @sign Number -> (a -> b) -> (a -> b)
 * @example
 * 
 * let id3 = f.times(3, f.identity)
 * 
 * id3(1) // => [1, 1, 1]
 */
const times = _curry2((n, fn) => (...args) => {
  let i = 0
  let ret = []

  while (i++ < n) {
    ret.push(fn(...args))
  }

  return ret
})

export default times