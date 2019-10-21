/**
 * Return a equivalent function of the supplied function
 * 
 * But only called once
 * 
 * The next time called will return the same result
 * 
 * @param {Function} fn 
 * @return {Function}
 * @since 0.1.0
 * @category Function
 * @sign (...x -> a) -> (...x -> a)
 * @example
 * 
 * let add1 = f.add(1)
 * let addOnce = f.once(add1)
 * 
 * addOnce(10) // => 11
 * addOnce(20) // => 11
 * addOnce(30) // => 11
 */
const once = fn => {
  let called = false
  let result

  return (...args) => {
    if (called) return result

    called = true
    result = fn(...args)

    return result
  }
}

export default once