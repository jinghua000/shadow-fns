const eq = require('./util/eq')
const f = require('../src')

describe('test pathEq', function () {
  
  it('test object', function () {

    let obj = { a: { a: 123, b: null } }

    eq(f.pathEq(['a', 'a'], 123)(obj), true)
    eq(f.pathEq(['a', 'b'], null)(obj), true)
    eq(f.pathEq(['a', 'c', 'd'], undefined)(obj), true)

  })

  it('object address is same', function () {

    let obj = {}

    let obj2 = { a: { a: obj } }

    eq(f.pathEq(['a', 'a'], obj)(obj2), true)

  })

})