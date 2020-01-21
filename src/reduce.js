import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Just Like `Array.prototype.reduce`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 * 
 * @param {Function} fn
 * @param {*} [def]
 * @param {Array} data
 * @return {*}
 * @since 0.1.0
 * @category Native
 * @sign (x -> a) -> Array -> a
 * @example
 * 
 * const sum = f.reduce((acc, cur) => acc += cur)
 * 
 * sum([1, 2, 3]) // => 6
 */
const reduce = _nativeSelfFn('reduce')

export default reduce