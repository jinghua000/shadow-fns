import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Just like `Promise.prototype.catch`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
 * 
 * @param {Function} fn
 * @param {Promise} data 
 * @return {Promise}
 * @category Native
 * @sign Function -> Promise -> Promise
 * @see then
 * @example
 *    
 * let fetchData = () => Promise.reject({ name: 'Eric' })
 * let getName = f.catch(f.prop('name'))
 * 
 * getName(fetchData()).then(console.log) // => logs: Eric
 */
const _catch = _nativeSelfFn('catch')

export default _catch