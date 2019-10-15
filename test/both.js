const eq = require('./util/eq')
const f = require('../src')

describe('test both', function () {
  
  it('test', function () {

    let fn1 = f.pipe(f.trace('test true'), f.T)
    let fn2 = f.pipe(f.trace('test false'), f.F)

    eq(f.both(fn1, fn2)('a'), false)
    eq(f.both(fn2, fn1)('b'), false)
    eq(f.both(f.T, f.T)('c'), true)

  })

  it('several arguments', function () {

    let fn1 = (a, b) => a + b < 10
    let fn2 = (a, b) => a + b > 5

    eq(f.both(fn1, fn2)(3, 4), true)
    eq(f.both(fn1, fn2)(5, 6), false)
    eq(f.both(fn1, fn2)(1, 2), false)

  })

})