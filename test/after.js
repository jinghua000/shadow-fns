const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test after', function () {
  
  it('after function', function () {

    let arr = []

    const afterFn = () => arr.push('after')
    const fn = () => arr.push('fn')

    f.after(afterFn)(fn)()

    equals(arr, ['fn', 'after'])

  })

  it('test arguments', function () {

    let arr = []

    const afterFn = arg => arr.push(arg + '123')
    const fn = arg => arr.push(arg)

    // arr length is 1
    eq(f.after(afterFn)(fn)('aaa'), 1)

    equals(arr, ['aaa', 'aaa123'])

  })

  it('test return', function () {

    let fn1 = f.always(123)
    let fn2 = f.always(234)

    eq(f.after(fn2)(fn1)(), 123)
    eq(f.after(fn1)(fn2)(), 234)

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

    let after = f.after(fn2.bind(obj))

    obj.fn = after(obj.fn.bind(obj))

    obj.fn()

    equals(arr, [234, 123])

  })

})