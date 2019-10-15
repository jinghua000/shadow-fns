const eq = require('./util/eq')
const f = require('../src')

describe('test either', function () {
  
  it('test', function () {

    let fn1 = f.pipe(f.trace('test true'), f.T)
    let fn2 = f.pipe(f.trace('test false'), f.F)

    eq(f.either(fn1, fn2)('a'), true)
    eq(f.either(fn2, fn1)('b'), true)
    eq(f.either(f.F, f.F)('c'), false)

  })

  it('several arguments', function () {

    let fn1 = (a, b) => a + b < 10
    let fn2 = (a, b) => a + b > 15

    eq(f.either(fn1, fn2)(3, 4), true)
    eq(f.either(fn1, fn2)(5, 6), false)
    eq(f.either(fn1, fn2)(9, 9), true)

  })

})