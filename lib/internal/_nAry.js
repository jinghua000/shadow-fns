"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @see nAry
 */
const _nAry = n => fn => (...args) => fn(...args.slice(0, n));

var _default = _nAry;
exports.default = _default;