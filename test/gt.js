const eq = require('./util/eq')
const f = require('../src')

describe('test gt', function () {
  
  it('test number', function () {

    let gt5 = f.gt(5)

    eq(gt5(6), true)
    eq(gt5(5), false)
    eq(gt5(4), false)

    eq(gt5('a'), false)
    eq(gt5(Infinity), true)
    eq(gt5(NaN), false)

  })

  it('test string', function () {

    let gtb = f.gt('b')

    eq(gtb('a'), false)
    eq(gtb('b'), false)
    eq(gtb('c'), true)

    eq(gtb(123), false)
    eq(gtb(Infinity), false)
    eq(gtb(NaN), false)

  })

  it('test others', function () {

    // string change to number
    eq(f.gt('05')(6), true)
    // boolean change to number
    eq(f.gt(false)(true), true)
    // null change to number
    eq(f.gt(-1)(null), true)

  })

})