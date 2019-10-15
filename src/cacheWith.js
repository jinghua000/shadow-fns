import _curry2 from './internal/_curry2'
import _has from './internal/_has'

/**
 * Pass the `cacheFn` and `fn` to make a new function
 * 
 * When call the new function, 
 * invoke the `cacheFn` with the passed arguments and record the return as the key,
 * record the `fn` return as the value
 * 
 * If the key is already exists, 
 * return the corresponding value without invoke `fn`
 * 
 * @param {Function} cacheFn - Cache with function
 * @param {Function} fn - Origin function
 * @return {Function}
 * @category Function, curried
 * @sign (...x -> a) -> (...x -> a) -> (...x -> a)
 * @example
 * 
 * let num = 0
 * let add = f.cacheWith(f.identity)(() => num += 1)
 * 
 * add(1) // => 1
 * add(1) // => 1
 * add(1) // => 1
 * add(2) // => 3
 */
const cacheWith = _curry2((cacheFn, fn) => {
  let cache = {}

  return (...args) => {
    let key = cacheFn(...args)

    if (!_has(cache, key)) {
      cache[key] = fn(...args)
    }
    
    return cache[key]
  }
})

export default cacheWith