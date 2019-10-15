const eq = require('./util/eq')
const f = require('../src')

describe('test lt', function () {
  
  it('test number', function () {

    let lt5 = f.lt(5)

    eq(lt5(6), false)
    eq(lt5(5), false)
    eq(lt5(4), true)

    eq(lt5('a'), false)
    eq(lt5(-Infinity), true)
    eq(lt5(NaN), false)

  })

  it('test string', function () {

    let ltb = f.lt('b')

    eq(ltb('a'), true)
    eq(ltb('b'), false)
    eq(ltb('c'), false)

    eq(ltb(123), false)
    eq(ltb(-Infinity), false)
    eq(ltb(NaN), false)

  })

  it('test others', function () {

    // string change to number
    eq(f.lt('05')(4), true)
    // boolean change to number
    eq(f.lt(true)(false), true)
    // null change to number
    eq(f.lt(1)(null), true)

  })

})