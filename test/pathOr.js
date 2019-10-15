const eq = require('./util/eq')
const f = require('../src')

describe('test pathOr', function () {
  
  it('test object', function () {

    let obj = { a: { a: 123, b: null } }

    eq(f.pathOr(['a', 'a'], 999)(obj), 123)
    eq(f.pathOr(['a', 'b'], 999)(obj), 999)
    eq(f.pathOr(['a', 'c', 'd'], 999)(obj), 999)

  })

  it('default value address is same', function () {

    let obj = {}

    eq(f.pathOr(['a', 'a', 'a'], obj)({}), obj)

  })

})