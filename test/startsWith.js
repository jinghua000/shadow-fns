const eq = require('./util/eq')
const f = require('../src')

describe('test startsWith', function () {
  
  it('test string', function () {

    let str = 'i have a plan'

    eq(f.startsWith('i have')(str), true)
    eq(f.startsWith('i have not')(str), false)
    eq(str, 'i have a plan')

  })

  it('have 2nd argument', function () {
    // second argument means start at n index

    let str = 'aabbcc'

    eq(f.startsWith('aa')(str), true)
    eq(f.startsWith('aa', 2)(str), false)
    eq(f.startsWith('bb', 2)(str), true)

  })

  it('2nd arugment out of range', function () {

    let str = 'aabbcc'

    // always false
    eq(f.startsWith('aa', 999)(str), false)
    // means whole string
    eq(f.startsWith('aa', -999)(str), true)

  })

})