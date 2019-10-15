const eq = require('./util/eq')
const f = require('../src')

describe('test curry', function () {
  
  it('test curry', function () {

    let fn = (a, b, c, d) => a + b + c + d
    fn = f.curry(fn)

    eq(fn(1, 2, 3, 4), 10)
    eq(fn(1, 2)(3, 4), 10)
    eq(fn(1, 2, 3)(4), 10)
    eq(fn(1)(2, 3, 4), 10)
    eq(fn(1)(2)(3)(4), 10)
    eq(fn()()()(1)(2)(3)(4), 10)

  })

  it('no context', function () {

    let obj = {
      a: 1,
      b: 2,
      c (key1, key2) {
        return this[key1] + this[key2]
      }
    }

    eq(obj.c('a', 'b'), 3)

    obj.c1 = f.curry(obj.c)

    let err

    try {
      obj.c1('a')('b')
    } catch (e) {
      err = e
    } finally {
      eq(err.message, `Cannot read property 'a' of undefined`)
      eq(err instanceof TypeError, true)
    }

    obj.c2 = f.curry(obj.c.bind(obj))

    eq(obj.c2('a')('b'), 3)

  })

  it('no rest', function () {

    let fn = (...args) => args.join('')
    fn = f.curry(fn)

    eq(fn(1, 2, 3), '123')

    let err

    try {
      fn(1)(2)(3)
    } catch (e) {
      err = e
    } finally {
      eq(err instanceof TypeError, true)
    }

  })

  it('no default', function () {

    let add = (a, b = 1, c) => a + b + c
    let fn = f.curry(add)

    let err

    try {
      fn(1)(2)(3)
    } catch (e) {
      err = e
    } finally {
      eq(err instanceof TypeError, true)
    }

  })
  
})