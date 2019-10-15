const assert = require('assert')

module.exports = function (actual, expect) {
  assert.deepStrictEqual(actual, expect)
}