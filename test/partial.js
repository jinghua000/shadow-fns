const eq = require('./util/eq')
const f = require('../src')

describe('test partial', function () {
  
  it('part of function', function () {

    let sum = (a, b, c) => a + b + c
    let sumAB = f.partial(sum)('a', 'b')

    eq(sumAB('c'), 'abc')
    eq(sumAB('d'), 'abd')

  })

  it('with curry', function () {

    let sum = f.curry((a, b, c) => a + b + c)

    eq(f.partial(sum)('a')('b', 'c'), 'abc')
    eq(f.partial(sum)('a')('b')('c'), 'abc')
    eq(f.partial(sum)('a', 'b')('c'), 'abc')

  })

  // oh, i know that this function not support context

})