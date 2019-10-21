"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just like `Promise.prototype.then`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
 * 
 * @param {Function} fn1
 * @param {Function} [fn2]
 * @param {Promise} data 
 * @return {Promise}
 * @since 0.1.0
 * @category Native
 * @sign (Function, Function?) -> Promise -> Promise
 * @see catch
 * @example
 *    
 * let fetchData = () => Promise.resolve({ name: 'Eric' })
 * let getName = f.then(f.prop('name'))
 * 
 * getName(fetchData()).then(console.log) // => logs: Eric
 */
const then = (0, _nativeSelfFn2.default)('then');
var _default = then;
exports.default = _default;