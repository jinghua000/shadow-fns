const eq = require('./util/eq')
const f = require('../src')

describe('test propEq', function () {
  
  it('test object', function () {

    let obj = { foo: 'bar' }

    eq(f.propEq('foo', 'bar')(obj), true)
    eq(f.propEq('bar', 'bar')(obj), false)

  })

  it('test array', function () {

    let arr = [0, 1, 2]

    eq(f.propEq(1, 1)(arr), true)
    eq(f.propEq(1, 2)(arr), false)

  })

})