const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test uncurry', function () {
  
  it('completely uncurry', function () {

    let fn = a => b => c => a + b + c
    let fn2 = f.uncurry(fn)

    eq(fn2('a', 'b', 'c'), 'abc')

  })

  it('partially uncurry', function () {

    let fn = a => b => c => a + b + c
    let fn2 = f.uncurry(fn)
    let err

    // similar to `f.uncurryN(3, fn)`
    eq(fn2('a', 'b', 'c'), 'abc')
    // similar to `f.uncurryN(2, fn)`
    eq(fn2('a', 'b')('c'), 'abc')
    // similar to `f.uncurryN(1, fn)`
    eq(fn2('a')('b')('c'), 'abc')

    try {
      // similar to `f.uncurryN(4, fn)`
      eq(fn2('a', 'b', 'c', 'd'), 'abc')
    } catch (e) {
      err = e
    } finally {
      eq(err instanceof TypeError, true)
    }

  })

  it('multiple calls', function () {

    let fn = a => b => c => a + b + c
    let fn2 = f.uncurry(fn)

    eq(fn2('a', 'b', 'c'), 'abc')
    eq(fn2('a', 'b', 'c'), 'abc')
    eq(fn2('a', 'b', 'c'), 'abc')

  })

  it('with partialRight', function () {

    let fn = a => b => c => a + b + c
    let fn2 = f.uncurry(fn)

    eq(f.partialRight(fn2)('a', 'b')('c'), 'cab')
    eq(f.partialRight(fn2)('a')('b', 'c'), 'bca')
    eq(f.partialRight(fn2)('a')('b')('c'), 'bac')

  })

})