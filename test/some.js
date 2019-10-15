const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test some', function () {
  
  it('test array', function () {

    let someGreaterThan3 = f.some(f.gt(3))

    eq(someGreaterThan3([2, 3, 4]), true)
    eq(someGreaterThan3([1, 2, 3]), false)

  })

  it('execute from left to right, stop when return true', function () {

    let called = []

    let fn1 = _ => called.push('fn1') && false
    let fn2 = _ => called.push('fn2') && true
    let fn3 = _ => called.push('fn3') && false

    eq(f.some(fn => fn())([fn1, fn2, fn3]), true)
    equals(called, ['fn1', 'fn2'])

  })

  it('arguments same as native method, 2nd argument bind `this`', function () {

    let arr1 = [1, 2, 3]
    let arr2 = [2, 3, 4]
    let fn = function (elem, index) {
      return this[index] > 3
    }

    eq(f.some(fn, arr1)(arr1), false)
    eq(f.some(fn, arr2)(arr1), true)

  })

})