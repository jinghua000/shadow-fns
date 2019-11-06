import _curry2 from './internal/_curry2'

/**
 * Wait for some time and return a `Promise` instance
 * 
 * @param {Number} ms 
 * @param {*} arg 
 * @return {Promise}
 * @since 0.1.0
 * @category Tools, curry2
 * @sign Number -> x -> Promise
 * @example
 * 
 * let fn = res => 'result is' + res
 * let sleepOneSec = sleep(1000)
 * 
 * sleepOneSec('hello').then(fn) 
 * // => after 1 sceond: 'result is hello'
 */
const sleep = _curry2((ms, arg) => new Promise(res => setTimeout(res, ms, arg)))

export default sleep