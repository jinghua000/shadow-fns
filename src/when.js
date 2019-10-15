import _curry3 from './internal/_curry3'

/**
 * Pass parameter to the first supplied function,
 * if true invoke the second one,
 * else return self
 * 
 * @param {Function} tryer 
 * @param {Function} handler 
 * @param {*} x
 * @return {*}
 * @category Tools, curried
 * @sign (a -> b, a -> c, a) -> a | c
 * @see unless, ifElse, cond
 * @example
 * 
 * let cannotOver3 = f.when(f.gt(3), f.always('so big'))
 * 
 * cannotOver3(5) // => 'so big'
 * cannotOver3(1) // => 1
 */
const when = _curry3((tryer, handler, x) => tryer(x) ? handler(x) : x)

export default when