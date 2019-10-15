const eq = require('./util/eq')
const f = require('../src')

describe('test gte', function () {
  
  it('test number', function () {

    let gte5 = f.gte(5)

    eq(gte5(6), true)
    eq(gte5(5), true)
    eq(gte5(4), false)

    eq(gte5('a'), false)
    eq(gte5(Infinity), true)
    eq(gte5(NaN), false)

  })

  it('test string', function () {

    let gteb = f.gte('b')

    eq(gteb('a'), false)
    eq(gteb('b'), true)
    eq(gteb('c'), true)

    eq(gteb(123), false)
    eq(gteb(Infinity), false)
    eq(gteb(NaN), false)

  })

  it('test others', function () {

    // string change to number
    eq(f.gte('05')(6), true)
    // boolean change to number
    eq(f.gte(false)(true), true)
    // null change to number
    eq(f.gte(-1)(null), true)

  })

})