const eq = require('./util/eq')
const f = require('../src')

describe('test propOr', function () {
  
  it('test propOr of object', function () {

    let obj = { foo: 'bar', baz: 0 }

    eq(f.propOr('foo', '')(obj), 'bar')
    eq(f.propOr('bar', undefined)(obj), undefined)
    eq(f.propOr('bar', 'default')(obj), 'default')

    // beware `0` is false 
    eq(f.propOr('baz', 123)(obj), 123)

  })

  it('test array', function () {

    let arr = [0, 1, 2]

    eq(f.propOr(0, 123)(arr), 123)
    eq(f.propOr(1, 123)(arr), 1)

  })

  it('other case', function () {

    let err 

    try {
      f.propOr(1, 2)(undefined)
    } catch (e) {
      err = e
    }

    eq(err instanceof TypeError, true)

  })

})