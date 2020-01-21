/**
 * Check the supplied parameters is satisfied of every function
 * 
 * From left-to-right
 * 
 * @param {...Function} fns
 * @param {...*} args
 * @return {Boolean}
 * @since 0.1.0
 * @category Tools
 * @sign (...a -> b, ...a -> c, ...) -> (...a -> Boolean)
 * @see somePass, both
 * @example
 * 
 * const everyPass = f.everyPass(f.gt(5), f.gt(10), f.gt(15))
 * 
 * everyPass(12) // => false
 * everyPass(20) // => true
 */
const everyPass = (...fns) => (...args) => {
  for (const fn of fns) {
    if (!fn(...args)) return false
  }
  return true
}

export default everyPass