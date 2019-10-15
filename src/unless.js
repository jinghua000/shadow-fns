import _curry3 from './internal/_curry3'

/**
 * Pass parameter to the first supplied function,
 * if not true invoke the second one,
 * else return self
 * 
 * @param {Function} tryer 
 * @param {Function} handler 
 * @param {*} x
 * @return {*}
 * @category Tools, curried
 * @sign (a -> b, a -> c, a) -> a | c
 * @see when, ifElse, cond
 * @example
 * 
 * let cannotBelow3 = f.unless(f.gt(3), f.always('so small'))
 * 
 * cannotBelow3(5) // => 5
 * cannotBelow3(1) // => 'so small'
 */
const unless = _curry3((tryer, handler, x) => tryer(x) ? x : handler(x) )

export default unless