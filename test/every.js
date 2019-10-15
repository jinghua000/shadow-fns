const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test every', function () {
  
  it('test array', function () {

    let everyGreaterThan3 = f.every(f.gt(3))

    eq(everyGreaterThan3([2, 3, 4]), false)
    eq(everyGreaterThan3([4, 5, 6]), true)

  })

  it('execute from left to right, stop when return false', function () {

    let called = []

    let fn1 = _ => called.push('fn1') && true
    let fn2 = _ => called.push('fn2') && false
    let fn3 = _ => called.push('fn3') && true

    eq(f.every(fn => fn())([fn1, fn2, fn3]), false)
    equals(called, ['fn1', 'fn2'])

  })

  it('arguments same as native method, 2nd argument bind `this`', function () {

    let arr1 = [1, 2, 3]
    let arr2 = [2, 3, 4]
    let fn = function (elem, index) {
      return this[index] > 1
    }

    eq(f.every(fn, arr1)(arr1), false)
    eq(f.every(fn, arr2)(arr1), true)

  })

})