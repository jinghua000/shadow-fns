const assert = require('assert')

module.exports = function (actual, expect) {
  assert.notDeepStrictEqual(actual, expect)
}