const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test every', function () {
  
  it('test array', function () {

    let noneGreaterThan3 = f.none(f.gt(3))

    eq(noneGreaterThan3([1, 2, 3]), true)
    eq(noneGreaterThan3([2, 3, 4]), false)

  })

  it('execute from left to right, stop when return true', function () {

    let called = []

    let fn1 = _ => called.push('fn1') && false
    let fn2 = _ => called.push('fn2') && true
    let fn3 = _ => called.push('fn3') && false

    eq(f.none(fn => fn())([fn1, fn2, fn3]), false)
    equals(called, ['fn1', 'fn2'])

  })

  // however, this is not native method, so not support 2nd argument

})