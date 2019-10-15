"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Return a function like native method for itself
 * 
 * @param {String} fnName 
 * @return {Function}
 * @sign String -> Function
 * @see concat, includes, slice
 */
const _nativeSelfFn = fnName => (...args) => data => data[fnName](...args);

var _default = _nativeSelfFn;
exports.default = _default;