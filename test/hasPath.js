const eq = require('./util/eq')
const f = require('../src')

describe('test hasPath', function () {
  
  it('test object', function () {

    let hasPath = f.hasPath(['a', 'a'])

    eq(hasPath({ a: { a: 123 } }), true)
    eq(hasPath({ b: 123 }), false)

  })

  // more see test/has.js

})