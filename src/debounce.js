import _curry2 from './internal/_curry2'

/**
 * Pass the `ms` and `fn` to create a new function
 * 
 * When invoke the new function, 
 * delays invoke `fn` until after wait `ms` milliseconds 
 * from the last time the new function called
 * 
 * @param {Number} ms 
 * @param {Function} fn
 * @return {Function}
 * @since 0.1.0
 * @category Function, curried
 * @sign Number -> (...x -> a) -> (...x -> undefined)
 * @see throttle
 * @example
 * 
 * let num = 0
 * let fn = f.debounce(100)(() => num += 1) 
 * 
 * fn()
 * fn()
 * fn()
 * 
 * console.log(num) // logs 0
 * setTimeout(() => console.log(num), 120) // logs 1 after 120 ms
 */
const debounce = _curry2((ms, fn) => {
  let timer = null

  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(fn, ms, ...args)
  }
})

export default debounce