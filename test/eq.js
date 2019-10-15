const eq = require('./util/eq')
const f = require('../src')

describe('test eq', function () {

  it('same element of same type should be equal', function () {

    eq(f.eq(1)(1), true)
    eq(f.eq('a')('a'), true)
    eq(f.eq(false)(false), true)
    eq(f.eq(undefined)(undefined), true)

  })

  it('same element of different type should not be equal', function () {

    eq(f.eq(1)('1'), false)
    eq(f.eq(true)('true'), false)

  })

  it('two object should not be equal', function () {

    eq(f.eq([])([]), false)
    eq(f.eq({})({}), false)
    eq(f.eq(NaN)(NaN), false)

  })

})