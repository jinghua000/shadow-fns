"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Generate a left-to-right async function pipe
 * 
 * Every functions need return a `Promise`
 * 
 * **NOTE:** Every function should be unary
 * 
 * @param {...Function} fns 
 * @param {*} arg
 * @return {Function}
 * @category Function
 * @sign (a -> PromiseA, ..., z -> PromiseZ) -> (a -> PromiseZ)
 * @see pipe
 * @example
 * 
 * let addA = arg => new Promise(res => setTimeout(res, 100, arg + 'a'))
 * let addB = arg => new Promise(res => setTimeout(res, 100, arg + 'b'))
 * let addC = arg => new Promise(res => setTimeout(res, 100, arg + 'c'))
 * let addABC = f.pipeAsync(addA, addB, addC)
 * 
 * addABC('').then(console.log) // => after 300 ms logs: 'abc'
 */
const pipeAsync = (...fns) => arg => fns.reduce((acc, cur) => acc.then(cur), Promise.resolve(arg));

var _default = pipeAsync;
exports.default = _default;