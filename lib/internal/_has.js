"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Okay, this method just like `Object.prototype.hasOwnProperty.call`
 * 
 * @param {*} args 
 * @return {Boolean}
 * @sign x -> Boolean
 * @see has
 */
const _has = (...args) => Object.prototype.hasOwnProperty.call(...args);

var _default = _has;
exports.default = _default;