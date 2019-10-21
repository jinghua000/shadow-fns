/**
 * Pass the arguments and return a new equivalent function
 * which will delay to invoked until it needs
 * 
 * It is the special case of `f.partial`
 * 
 * @param {Function} fn 
 * @param {*} args
 * @return {Function}
 * @since 0.1.0
 * @category Function
 * @sign ((a, b, ..., z) -> res) -> (a, b, ..., z) -> () -> res
 * @see partial, partialRight
 * @example
 * 
 * let sum = (a, b, c) => a + b + c
 * let waitSum = f.thunkify(sum)('a', 'b', 'c')
 * 
 * waitSum() // => 'abc'
 */
const thunkify = fn => (...args) => () => fn(...args)

export default thunkify