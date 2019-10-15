"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Similar to `f.curryN`
 * 
 * @see curryN
 */
const _curryN = n => fn => {
  const curried = (...args) => args.length < n ? (...args2) => curried(...args, ...args2) : fn(...args);

  return curried;
};

var _default = _curryN;
exports.default = _default;