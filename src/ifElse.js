import _curry3 from './internal/_curry3'

/**
 * Pass parameters to the first supplied function,
 * if true invoke the second one,
 * else invoke the third one
 * 
 * @param {Function} tryer 
 * @param {Function} reslover 
 * @param {Function} rejecter 
 * @return {Function}
 * @since 0.1.0
 * @category Tools, curry3
 * @sign (...a -> b, ...a -> c, ...a -> d) -> (...a -> c | d)
 * @see when, unless, cond
 * @example
 * 
 * const check3 = f.ifElse(f.gt(3), f.always('so big'), f.always('so small'))
 * check3(5) // => 'so big'
 * check3(1) // => 'so small'
 */
const ifElse = _curry3((tryer, reslover, rejecter) => 
  (...args) => tryer(...args) 
    ? reslover(...args) 
    : rejecter(...args)
)

export default ifElse