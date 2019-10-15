const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test flip', function () {
  
  it('test flip', function () {

    let print = (...args) => args
    let flipPrint = f.flip(print)

    equals(print(1, 2, 3), [1, 2, 3])
    equals(flipPrint(1, 2, 3), [3, 2, 1])

  })

  it('with curry', function () {

    let add = f.curry((a, b, c) => a + b + c)
    let fn = f.flip(add)

    eq(fn('a', 'b', 'c'), 'cba')
    eq(fn('a', 'b')('c'), 'bac')
    eq(fn('a')('b', 'c'), 'abc')
    eq(fn('a')('b')('c'), 'abc')

  })

  // of course this function not support context, i will not try here

})