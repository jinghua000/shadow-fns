import _curry2 from './internal/_curry2'

/**
 * Pass the `ms` and `fn` to create a new function
 * 
 * When invoke the new function, 
 * `fn` will be invoked,
 * and at most invoke once in `ms` milliseconds
 * 
 * @param {Number} ms 
 * @param {Function} fn
 * @return {Function}
 * @category Function, curried
 * @sign Number -> (...x -> a) -> (...x -> a)
 * @see debounce
 * @example
 * 
 * let num = 0
 * let fn = f.throttle(100)(() => num += 1) 
 * 
 * fn()
 * fn()
 * fn()
 * setTimeout(fn, 120)
 * 
 * console.log(num) // logs 1
 * console.log(num) // logs 1
 * console.log(num) // logs 1
 * setTimeout(() => console.log(num), 150) // logs 2 after 150 ms
 */
const throttle = _curry2((ms, fn) => {
  let timer = null
  let result

  return (...args) => {
    if (timer !== null) return result

    timer = setTimeout(() => timer = null, ms)
    result = fn(...args)

    return result
  }
})

export default throttle