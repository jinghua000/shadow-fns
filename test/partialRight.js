const eq = require('./util/eq')
const f = require('../src')

describe('test partialRight', function () {
  
  it('part of function', function () {

    let sum = (a, b, c) => a + b + c
    let sumAB = f.partialRight(sum)('a', 'b')

    eq(sumAB('c'), 'cab')
    eq(sumAB('d'), 'dab')

  })

  it('with curry', function () {

    let sum = f.curry((a, b, c) => a + b + c)

    eq(f.partialRight(sum)('a')('b', 'c'), 'bca')
    eq(f.partialRight(sum)('a')('b')('c'), 'bac')
    eq(f.partialRight(sum)('a', 'b')('c'), 'cab')

  })

  // oh, i know that this function not support context

})