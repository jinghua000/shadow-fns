import _nativeSelfFn from './internal/_nativeSelfFn'

/**
 * Just Like `Array.prototype.map`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map  
 * 
 * @param {Function} fn
 * @param {Array} [thisArg]
 * @param {Array} arr
 * @since 0.1.0
 * @category Native
 * @return {Array}
 * @sign (a -> b) -> [a] -> [b]
 * @example
 * 
 * const mapDouble = f.map(f.multiply(2))
 * 
 * mapSquare([1, 2, 3]) // => [2, 4, 6]
 */
const map = _nativeSelfFn('map')

export default map