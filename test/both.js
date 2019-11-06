const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test both', function () {
  
  it('first call second, if succeed call first', function () {

    let arr = []
    let fn1 = () => arr.push(1) && true
    let fn2 = () => arr.push(2) && false

    f.both(fn1, fn2)()

    equals(arr, [2])

  })

  it('several arguments', function () {

    let fn1 = (a, b) => a + b < 10
    let fn2 = (a, b) => a + b > 5

    eq(f.both(fn1, fn2)(3, 4), true)
    eq(f.both(fn1, fn2)(5, 6), false)
    eq(f.both(fn1, fn2)(1, 2), false)

  })

})