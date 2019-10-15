const assert = require('assert')

module.exports = function (actual, expect) {
  assert.notStrictEqual(actual, expect)
}