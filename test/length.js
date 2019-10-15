const eq = require('./util/eq')
const f = require('../src')

describe('test length', function () {
  
  it('test str', function () {

    eq(f.length('abc'), 3)
    eq(f.length(''), 0)

  })

  it('test array', function () {

    eq(f.length(['', null, undefined]), 3)
    eq(f.length([,,,]), 3)
    eq(f.length([,,]), 2)
    eq(f.length([,]), 1)
    eq(f.length([]), 0)

  })

  it('test function', function () {

    let fn1 = (...args) => args
    let fn2 = (a, b) => [a, b]

    eq(f.length(fn1), 0)
    eq(f.length(fn2), 2)

  })

  it('others', function () {

    let obj = { length: 100 }
    let err

    eq(f.length(obj), 100)

    try {
      f.length()
    } catch (e) {
      err = e
    } finally {
      eq(err instanceof TypeError, true)
    }

  })

})
