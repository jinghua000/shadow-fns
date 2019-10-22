const eq = require('./util/eq')
const f = require('../src')

describe('test nth', function () {
  
  it('test string', function () {

    let str = 'i have a plan'

    eq(f.nth(-1)(str), 'n')
    eq(f.nth(1)(str), ' ')
    eq(f.nth(999)(str), undefined)

  })

  it('test array', function () {

    let arr = [1, 2, 3, 4, 5]

    eq(f.nth(-2)(arr), 4)
    eq(f.nth(2)(arr), 3)
    eq(f.nth(5)(arr), undefined)

  })

  it('out of range should return undefined', function () {

    eq(f.nth(5, [1, 2, 3]), undefined)
    eq(f.nth(5, '123'), undefined)
    eq(f.nth(-5, [1, 2, 3]), undefined)
    eq(f.nth(-5, '123'), undefined)

  })

})