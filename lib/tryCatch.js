"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(require("./internal/_curry2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Call the first function 
 * 
 * If throw an error, call the next
 * 
 * @param {Function} tryer 
 * @param {Function} catcher 
 * @return {Function}
 * @since 0.1.0
 * @category Tools, curried
 * @sign (...a -> b, ...a -> c) -> (...a -> b | c)
 * @example
 * 
 * let parse = f.tryCatch(JSON.parse, f.always({}))
 * 
 * parse(JSON.stringify({ a: 1 })) // => { a: 1 }
 * parse({ a: 1 }) // => {}
 */
const tryCatch = (0, _curry.default)((tryer, catcher) => (...args) => {
  let result;

  try {
    result = tryer(...args);
  } catch (err) {
    result = catcher(...args);
  } finally {
    return result;
  }
});
var _default = tryCatch;
exports.default = _default;