import _curry2 from './internal/_curry2'

/**
 * Get a random integer between the min and the max number supplied
 * 
 * Contains the min and the max
 * 
 * **NOTE:** Support Integer Only
 * 
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 * @category Tools, curried
 * @sign Number -> Number -> Number
 * @example
 * 
 * f.random(1, 10) // => 1
 * f.random(1, 10) // => 9
 * f.random(1, 10) // => 8
 * f.random(1, 10) // => 10
 */
const random = _curry2((min, max) => Math.floor(
  min + Math.random() * (max - min + 1)
))

export default random