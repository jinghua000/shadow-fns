const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test uncurryN', function () {
  
  it('completely uncurry', function () {

    let fn = a => b => c => a + b + c
    let fn2 = f.uncurryN(3, fn)

    eq(fn2('a', 'b', 'c'), 'abc')
    eq(fn2('a', 'b', 'c', 'd'), 'abc')

  })

  it('partially uncurry', function () {

    let fn = a => b => c => a + b + c
    let fn2 = f.uncurryN(2, fn)
    let err

    eq(fn2('a', 'b')('c'), 'abc')
    eq(fn2('a')('b', 'c'), 'aundefinedb')

    try {
      // uncurryN need call arguments in one time
      eq(fn2('a')('b')('c'), 'aundefinedb')
    } catch (e) {
      err = e
    } finally {
      eq(err instanceof TypeError, true)
    }

  })

  it('self curried', function () {

    let fn = a => b => a + b 
    let uncurry2 = f.uncurryN(2)
    let fn2 = uncurry2(fn)

    eq(fn2('a', 'b'), 'ab')

  })

  it('multiple calls', function () {

    let fn = a => b => c => a + b + c
    let fn2 = f.uncurryN(3, fn)

    eq(fn2('a', 'b', 'c'), 'abc')
    eq(fn2('a', 'b', 'c'), 'abc')
    eq(fn2('a'), 'aundefinedundefined')
    eq(fn2('a', 'b'), 'abundefined')

  })

  it('with partialRight', function () {

    let fn = a => b => c => a + b + c
    let fn2 = f.uncurryN(3, fn)
    let err

    eq(f.partialRight(fn2)('a', 'b')('c'), 'cab')
    eq(f.partialRight(fn2)('a')('b', 'c'), 'bca')

    try {
      // uncurryN need call arguments in one time
      eq(f.partialRight(fn2)('a')('b')('c'), 'bac')
    } catch (e) {
      err = e
    } finally {
      eq(err instanceof TypeError, true)
    }

  })

  it('over num', function () {

    let fn = a => b => c => a + b + c
    let fn2 = f.uncurryN(4, fn)
    let err

    try {
      eq(fn2('a', 'b', 'c'), 'abc')
    } catch (e) {
      err = e 
    } finally {
      eq(err instanceof TypeError, true)
    }

  })

  it('with partialRight', function () {

    let fn = a => b => c => a + b + c
    let fn2 = f.uncurryN(3, fn)

    eq(f.partialRight(fn2)('a', 'b')('c'), 'cab')

  })

})