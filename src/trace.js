import _curry2 from './internal/_curry2'

/**
 * This is a function for debug
 * 
 * Use with function like `f.pipe`
 * 
 * To test what parameters passed in 
 * 
 * @param {String} tag 
 * @param {*} x 
 * @return {*}
 * @since 0.1.0
 * @category Tools, curried
 * @sign String -> a -> a
 * @example
 * 
 * let add3 = f.pipe(
 *   f.add(1), 
 *   f.trace('what i am?')
 *   f.add(1), 
 *   f.trace('what i am?')
 *   f.add(1), 
 * )
 * 
 * add3(3) 
 * // logs: what i am?, 4
 * // logs: what i am?, 5
 * // => 6
 */
const trace = _curry2((tag, x) => { console.log(tag, x); return x })

export default trace