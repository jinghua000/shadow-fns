"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Execute the given function with the supplied params, then return the params
 * 
 * Notice that this perhaps change the params passed
 * 
 * This function usual use in case like this 
 * 
 * `function foo () { let a = {}; a.a = 123; return a }`
 * 
 * To
 * 
 * `const foo = () => f.tap(obj => obj.a = 123, {})`
 * 
 * **NOTE:** Not Pure
 * 
 * @param {Function} fn 
 * @param {*} e
 * @return {*}
 * @since 0.1.0
 * @category Tools, curried
 * @sign (a -> x) -> a -> a
 * @example
 *    
 * let fn = obj => obj.a = 123
 * 
 * f.tap(fn)({}) // => { a: 123 }
 */
const tap = (0, _curry.default)((fn, e) => {
  fn(e);
  return e;
});
var _default = tap;
exports.default = _default;