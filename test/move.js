const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test move', function () {
  
  it('common case', function () {
    let arr = [1, 2, 3, 4]

    equals(f.move(1, 2, arr), [1, 3, 2, 4])
    equals(f.move(0, 0, arr), [1, 2, 3, 4])
    equals(f.move(3, 1, arr), [1, 4, 2, 3])
    equals(arr, [1, 2, 3, 4])
  })

  it('should support negative index', function () {
    let arr = [1, 2, 3, 4]

    equals(f.move(-1, -1, arr), [1, 2, 3, 4])
    equals(f.move(-1, -2, arr), [1, 2, 4, 3])
    equals(f.move(-3, -1, arr), [1, 3, 4, 2])
    equals(f.move(-1, 1, arr), [1, 4, 2, 3])
  })

  it('out of range should return origin array', function () {
    let arr = [1, 2, 3, 4]

    eq(f.move(1, 100, arr), arr)
    eq(f.move(-1, 100, arr), arr)
    eq(f.move(-100, 1, arr), arr)
    eq(f.move(100, 1, arr), arr)
  })

  it('of course support curry', function () {
    let arr = [1, 2, 3, 4]

    equals(f.move(1, 2, arr), [1, 3, 2, 4])
    equals(f.move(1, 2)(arr), [1, 3, 2, 4])
    equals(f.move(1)(2, arr), [1, 3, 2, 4])
    equals(f.move(1)(2)(arr), [1, 3, 2, 4])
  })

  it('is shallow copy', function () {
    let arr = [{}]
    f.move(0, 0, arr)[0].foo = 'foo'

    equals(arr, [{ foo: 'foo' }])
  })

})