const eq = require('./util/eq')
const f = require('../src')

describe('test isNil', function () {
  
  it('null or undefined', function () {

    eq(f.isNil(null), true)
    eq(f.isNil(undefined), true)

  })

  it('others', function () {

    eq(f.isNil(''), false)
    eq(f.isNil('undefined'), false)
    eq(f.isNil(false), false)
    eq(f.isNil(NaN), false)
    eq(f.isNil({}), false)
    eq(f.isNil([]), false)
    eq(f.isNil(0), false)

  })

})