/**
 * Check the supplied parameters is satisfied of every function
 * 
 * From left-to-right
 * 
 * @param {...Function} fns
 * @param {...*} args
 * @return {Boolean}
 * @category Tools
 * @sign (...a -> b, ...a -> c, ...) -> (...a -> Boolean)
 * @see somePass, both
 * @example
 * 
 * let everyPass = f.everyPass(f.gt(5), f.gt(10), f.gt(15))
 * 
 * everyPass(12) // => false
 * everyPass(20) // => true
 */
const everyPass = (...fns) => (...args) => {
  for (let fn of fns) {
    if (!fn(...args)) return false
  }
  return true
}

export default everyPass