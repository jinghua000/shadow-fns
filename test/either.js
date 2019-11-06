const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test either', function () {
  
  it('first call second, if not succeed call first', function () {

    let arr = []
    let fn1 = () => arr.push(1) && false
    let fn2 = () => arr.push(2) && true

    f.either(fn1, fn2)()

    equals(arr, [2])

  })

  it('several arguments', function () {

    let fn1 = (a, b) => a + b < 10
    let fn2 = (a, b) => a + b > 15

    eq(f.either(fn1, fn2)(3, 4), true)
    eq(f.either(fn1, fn2)(5, 6), false)
    eq(f.either(fn1, fn2)(9, 9), true)

  })

})