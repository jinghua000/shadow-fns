import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Just like `Promise.prototype.then`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
 * 
 * @param {Function} fn1
 * @param {Function} [fn2]
 * @param {Promise} data 
 * @return {Promise}
 * @category Native
 * @sign (Function, Function?) -> Promise -> Promise
 * @see catch
 * @example
 *    
 * let fetchData = () => Promise.resolve({ name: 'Eric' })
 * let getName = f.then(f.prop('name'))
 * 
 * getName(fetchData()).then(console.log) // => logs: Eric
 */
const then = _nativeSelfFn('then')

export default then