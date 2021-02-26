import _curry2 from './internal/_curry2'

/**
 * Call the supplied function for `n` times
 * and push the returns to an array
 * 
 * @param {Number} n
 * @param {Function} fn
 * @return {Function}
 * @since 0.1.0
 * @category Tools, curry2
 * @sign Number -> (a -> b) -> (a -> b)
 * @example
 * 
 * const id3 = f.times(3, f.identity)
 * 
 * id3(1) // => [1, 1, 1]
 */
const times = _curry2((n, fn) => (...args) => {
  let i = 0
  const arr = Array(n)

  while (i < n) {
    arr[i++] = fn(...args)
  }

  return arr
})

export default times