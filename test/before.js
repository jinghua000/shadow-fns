const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test before', function () {
  
  it('before function', function () {

    let arr = []

    const beforeFn = () => arr.push('before')
    const fn = () => arr.push('fn')

    f.before(beforeFn)(fn)()

    equals(arr, ['before', 'fn'])

  })

  it('test arguments', function () {

    let arr = []

    const beforeFn = arg => arr.push(arg + '123')
    const fn = arg => arr.push(arg)

    // arr length is 2
    eq(f.before(beforeFn)(fn)('aaa'), 2)

    equals(arr, ['aaa123', 'aaa'])

  })

  it('test return', function () {

    let fn1 = f.always(123)
    let fn2 = f.always(234)

    eq(f.before(fn2)(fn1)(), 123)
    eq(f.before(fn1)(fn2)(), 234)

  })

  it('with context', function () {

    let arr = []

    let obj = {
      a: 123,
      b: 234,
      fn () {
        arr.push(this.b)
      }
    }

    function fn2 () {
      arr.push(this.a)
    }

    let before = f.before(fn2.bind(obj))

    obj.fn = before(obj.fn.bind(obj))

    obj.fn()

    equals(arr, [123, 234])

  })

})