"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Pass some array made of two functions,
 * first `tryer`, second `handler` like `f.when`
 * 
 * If `tryer` true, call the corresponding `handler` and return,
 * else next
 * 
 * @param {...Array<Function>} conditions 
 * @return {Function}
 * @category Tools
 * @sign ([...a -> b, ...a -> c], [...a -> d, ...a -> e], ...) -> (...a -> c | e | x)
 * @see when, unless, ifElse
 * @example
 * 
 * let judgeMan = f.cond(
 *   [f.gt(90), f.always('good man')],
 *   [f.gt(70), f.always('common man')],
 *   [f.gt(50), f.always('weak man')],
 *   [f.T, f.always('unless man')]
 * )
 * 
 * let man1 = { name: 'Dark', point: 80 }
 * let man2 = { name: 'White', point: 30 }
 * 
 * judgeMan(man1.point) // => 'common man'
 * judgeMan(man2.point) // => 'unless man'
 */
const cond = (...conditions) => (...args) => {
  for (let condition of conditions) {
    if (condition[0](...args)) return condition[1](...args);
  }
};

var _default = cond;
exports.default = _default;