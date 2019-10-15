const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test always', function () {

  it('common value euqal', function () {

    let fn 

    fn = f.always(10)

    eq(fn(undefined), 10)
    eq(fn('123'), 10)

    fn = f.always({ a: 1 })

    equals(fn(), { a: 1 })

  })

  it('return object should be equal with the pass object', function () {

    let obj = { a: 1 }
    let s = Symbol()

    eq(f.always(obj)(false) === obj, true)
    eq(f.always(s)('xxx') === s, true)

  })
  
})