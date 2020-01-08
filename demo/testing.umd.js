(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.demo = factory());
}(this, (function () { 'use strict';

  /**
   * Similar to `f.curryN`
   * 
   * @see curryN
   */
  const _curryN = n => fn => {
    const curried = (...args) => 
      args.length < n
        ? (...args2) => curried(...args, ...args2)
        : fn(...args);
    return curried
  };

  /**
   * @see _curryN
   */
  const _curry2 = _curryN(2);

  /**
   * Like `+`
   * 
   * The second parameter add the first 
   * 
   * @param {*} x 
   * @param {*} e
   * @return {Number|String}
   * @since 0.1.0
   * @category Logic, curry2
   * @sign a -> a -> a
   * @see subtract
   * @example
   * 
   * f.add(1)(2) // => 3
   * f.add('a')('b') // => 'ba'
   * f.add(undefined)(undefined) // => NaN
   */
  const add = _curry2((x, e) => e + x);

  /**
   * Like `*`
   * 
   * The second parameter multiply the first 
   * 
   * @param {Number} x 
   * @param {Number} e 
   * @return {Number}
   * @since 0.1.0
   * @category Logic, curry2
   * @sign Number -> Number -> Number
   * @see divide
   * @example 
   * 
   * let multiply3 = f.multiply(3)
   * 
   * multiply3(2) // => 6
   * multiply3(3) // => 9
   */
  const multiply = _curry2((x, e) => e * x);

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
   * let calc = f.pipe(f.add(1), f.multiply(2))
   * 
   * calc(1) // => 4
   * calc(3) // => 8
   */
  const pipe = (...fns) => fns.reduce(
    (acc, cur) => (...args) => cur(acc(...args))
  );

  const fn = pipe(add(1), multiply(2));

  return fn;

})));
