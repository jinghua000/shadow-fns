const eq = require('./util/eq')
const f = require('../src')

describe('test lte', function () {
  
  it('test number', function () {

    let lte5 = f.lte(5)

    eq(lte5(6), false)
    eq(lte5(5), true)
    eq(lte5(4), true)

    eq(lte5('a'), false)
    eq(lte5(-Infinity), true)
    eq(lte5(NaN), false)

  })

  it('test string', function () {

    let lteb = f.lte('b')

    eq(lteb('a'), true)
    eq(lteb('b'), true)
    eq(lteb('c'), false)

    eq(lteb(123), false)
    eq(lteb(-Infinity), false)
    eq(lteb(NaN), false)

  })

  it('test others', function () {

    // string change to number
    eq(f.lte('05')(4), true)
    // boolean change to number
    eq(f.lte(true)(false), true)
    // null change to number
    eq(f.lte(1)(null), true)

  })

})