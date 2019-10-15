const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test cacheWith', function () {
  
  it('cache id', function () {

    let arr = []

    let fn = el => arr.push(el)
    let cache = f.cacheWith(f.identity)
    let cacheFn = cache(fn)

    eq(cacheFn(123), 1)
    eq(cacheFn(123), 1)
    eq(cacheFn(123), 1)
    eq(cacheFn(234), 2)
    equals(arr, [123, 234])

  })

  it('cache with prop', function () {

    let man1 = {
      name: 'Alex',
      age: 10,
    }

    let man2 = {
      name: 'Peter',
      age: 90
    }

    let arr = []

    let fn = el => arr.push(el)
    let cache = f.cacheWith(f.prop('name'))
    let cacheFn = cache(fn)

    eq(cacheFn(man1), 1)
    eq(cacheFn(man1), 1)
    eq(cacheFn(man2), 2)
    eq(cacheFn(man2), 2)
    equals(arr, [man1, man2])

  })

  it('with context', function () {

    let obj = {
      arr: [],
      a: 123,
      b: 234,
      c (key) {
        return this.arr.push(this[key])
      }
    }

    let cache = f.cacheWith(f.identity)
    let cacheFn = cache(obj.c.bind(obj))

    eq(cacheFn('a'), 1)
    eq(cacheFn('a'), 1)
    eq(cacheFn('b'), 2)
    eq(cacheFn('b'), 2)
    equals(obj.arr, [123, 234])

  })

})