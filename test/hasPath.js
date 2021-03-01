const eq = require('./util/eq')
const f = require('../src')

describe('test hasPath', function () {
  
  it('test object', function() {

    let hasPath = f.hasPath(['a', 'a'])

    eq(hasPath({ a: { a: 123 } }), true)
    eq(hasPath({ b: 123 }), false)

  })

  it('also available for arrays', function() {

    const hasPath = f.hasPath([0, 0])

    eq(hasPath([[null]]), true)
    eq(hasPath([[]]), false)

  })

  // more see test/has.js

})