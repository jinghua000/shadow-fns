"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wait for some time and return a `Promise` instance
 * 
 * @param {Number} ms 
 * @param {*} arg 
 * @return {Promise}
 * @since 0.1.0
 * @category Tools, curry2
 * @sign Number -> x -> Promise
 * @example
 * 
 * let fn = res => 'result is' + res
 * let sleepOneSec = sleep(1000)
 * 
 * sleepOneSec('hello').then(fn) 
 * // => after 1 sceond: 'result is hello'
 */
const sleep = (0, _curry.default)((ms, arg) => new Promise(res => setTimeout(res, ms, arg)));
var _default = sleep;
exports.default = _default;