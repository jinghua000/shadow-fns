const eq = require('./util/eq')
const f = require('../src')

describe('test endsWith', function () {
  
  it('test string', function () {

    let str = 'i have a plan'

    eq(f.endsWith('a plan')(str), true)
    eq(f.endsWith('no plan')(str), false)
    eq(str, 'i have a plan')

  })

  it('have 2nd argument', function () {
    // second argument means length of string

    let str = 'aabbcc'

    eq(f.endsWith('cc')(str), true)
    eq(f.endsWith('cc', 3)(str), false)
    eq(f.endsWith('bb', 4)(str), true)

  })

  it('2nd arugment out of range', function () {

    let str = 'aabbcc'
    
    // means whole string
    eq(f.endsWith('cc', 999)(str), true)
    // always false
    eq(f.endsWith('cc', -999)(str), false)

  })

})