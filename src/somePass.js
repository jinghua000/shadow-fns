/**
 * Check the supplied parameters is satisfied of some function
 * 
 * From left-to-right
 * 
 * Default `false`
 * 
 * @param {...Function} fns
 * @param {...*} args
 * @return {Boolean}
 * @category Tools
 * @sign (...a -> b, ...a -> c, ...) -> (...a -> Boolean)
 * @see everyPass, either
 * @example
 * 
 * let somePass = f.somePass(f.gt(5), f.gt(10), f.gt(15))
 * 
 * somePass(12) // => true
 * somePass(3) // => false
 */
const somePass = (...fns) => (...args) => {
  for (let fn of fns) {
    if (fn(...args)) return true
  }
  return false
}

export default somePass