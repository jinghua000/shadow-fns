import merge from './merge'

/**
 * Convert the Array which seems like `[[key, value], ...]` to Object.
 * 
 * If has multiple same keys, use the rightmost one.
 * 
 * @param {Array} arr 
 * @return {Object}
 * @since 0.1.4
 * @category Array
 * @sign [[k, v], ...] -> { k: v, ... }
 * @see toPairs
 * @example
 * 
 * f.fromPairs([['a', 1], ['b', 2], ['c', 3]]) // => { a: 1, b: 2, c: 3 }
 * f.fromPairs([['a', 1], ['b', 2], ['a', 3]]) // => { a: 3, b: 2 }
 */
const fromPairs = arr => merge(...arr.map(
  elem => ({ [elem[0]]: elem[1] })
))

export default fromPairs