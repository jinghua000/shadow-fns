import _curry2 from './internal/_curry2'

/**
 * Check two element strict equal by `===`
 * 
 * @param {*} x 
 * @param {*} e
 * @return {Boolean}
 * @since 0.1.0
 * @category Logic, curried
 * @see equals
 * @example 
 * 
 * f.eq(1)(1) // => true
 * f.eq(NaN)(NaN) // => false
 * f.eq({})({}) // => false
 */
const eq = _curry2(
  (x, e) => e === x
)

export default eq