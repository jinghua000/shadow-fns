/**
 * Generate a left-to-right async function pipe
 * 
 * Every functions need return a `Promise`
 * 
 * **NOTE:** Every function should be unary
 * 
 * @param {...Function} fns 
 * @param {*} arg
 * @return {Function}
 * @since 0.1.0
 * @category Function
 * @sign (a -> PromiseA, ..., z -> PromiseZ) -> (a -> PromiseZ)
 * @see pipe
 * @example
 * 
 * const addA = arg => new Promise(res => setTimeout(res, 100, arg + 'a'))
 * const addB = arg => new Promise(res => setTimeout(res, 100, arg + 'b'))
 * const addC = arg => new Promise(res => setTimeout(res, 100, arg + 'c'))
 * const addABC = f.pipeAsync(addA, addB, addC)
 * 
 * addABC('').then(console.log) // => after 300 ms logs: 'abc'
 */
const pipeAsync = (...fns) => arg => fns.reduce(
  (acc, cur) => acc.then(cur),
  Promise.resolve(arg)
)

export default pipeAsync