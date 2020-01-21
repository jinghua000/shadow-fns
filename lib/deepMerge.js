"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _type = _interopRequireDefault(require("./type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Deep merge some objects from `left-to-right`
 * and return a new object
 * 
 * Supplied object will not change
 * 
 * **NOTE:** Only support `{}`
 * 
 * @param {...Object} args 
 * @return {Object}
 * @since 0.1.0
 * @category Object
 * @sign ({ k: a }, { k: b }, ..., { k: n }) -> { k: n }
 * @see merge
 * @example
 * 
 * const obj1 = { a: { a: 123, b: 234 } }
 * const obj2 = { a: { a: 234 } }
 * 
 * f.deepMerge(obj1, obj2) // => { a: { a: 234, b: 234 } }
 */
const deepMerge = (...args) => {
  const length = args.length;
  if (length < 2) return args[0];
  const obj1 = Object.assign({}, args[0]);
  const obj2 = Object.assign({}, args[1]);
  Object.keys(obj2).forEach(k => obj1[k] = (0, _type.default)(obj1[k]) === 'Object' && (0, _type.default)(obj2[k]) === 'Object' ? deepMerge(obj1[k], obj2[k]) : obj2[k]);
  return deepMerge(obj1, ...args.slice(2));
};

var _default = deepMerge;
exports.default = _default;