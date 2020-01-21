"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

var _isNil = _interopRequireDefault(require("./isNil"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check the element is the instance of supplied constructor
 * 
 * Support prototype chain 
 * 
 * @param {Function} constructor 
 * @param {*} e 
 * @return {Boolean}
 * @since 0.1.0
 * @category Tools, curry2
 * @sign Function -> x -> Boolean
 * @see type
 * @example
 * 
 * class C {}
 * const c = new C()
 * 
 * f.is(C)(c) // => true  
 * f.is(Object)(c) // => true  
 * f.is(Object)([]) // => true
 * f.is(Number)(10) // => true
 * f.is(String)(10) // => false
 */
const is = (0, _curry.default)((constructor, e) => !(0, _isNil.default)(e) && e.constructor === constructor || e instanceof constructor);
var _default = is;
exports.default = _default;