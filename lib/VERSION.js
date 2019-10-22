"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _package = _interopRequireDefault(require("../package.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Library's version
 * 
 * @type {String}
 * @since 0.1.4
 * @category Other
 * @example
 * 
 * f.VERSION // => 0.1.4
 */
const VERSION = _package.default.version;
var _default = VERSION;
exports.default = _default;