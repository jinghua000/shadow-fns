"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativeSelfFn2 = _interopRequireDefault(require("./internal/_nativeSelfFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just like `Promise.prototype.catch`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
 * 
 * @param {Function} fn
 * @param {Promise} data 
 * @return {Promise}
 * @category Native
 * @sign Function -> Promise -> Promise
 * @see then
 * @example
 *    
 * let fetchData = () => Promise.reject({ name: 'Eric' })
 * let getName = f.catch(f.prop('name'))
 * 
 * getName(fetchData()).then(console.log) // => logs: Eric
 */
const _catch = (0, _nativeSelfFn2.default)('catch');

var _default = _catch;
exports.default = _default;