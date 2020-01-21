/**
 * Generate a left-to-right function pipe
 * 
 * One's returns considered as next's parameter
 * 
 * Except the first function, others should be unary
 * 
 * @param {...Function} fns 
 * @return {Function}
 * @since 0.1.0
 * @category Function
 * @sign (...a -> b, b -> c, ..., y -> z) -> (...a -> z)
 * @see pipeAsync
 * @example
 *    
 * // add 1 then multiply 2
 * const calc = f.pipe(f.add(1), f.multiply(2))
 * 
 * calc(1) // => 4
 * calc(3) // => 8
 */
const pipe = (...fns) => fns.reduce(
  (acc, cur) => (...args) => cur(acc(...args))
)

export default pipe