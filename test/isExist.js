const eq = require('./util/eq')
const f = require('../src')

describe('test isExist', function () {
  
  it('null or undefined', function () {

    eq(f.isExist(null), false)
    eq(f.isExist(undefined), false)

  })

  it('others', function () {

    eq(f.isExist(''), true)
    eq(f.isExist('undefined'), true)
    eq(f.isExist(false), true)
    eq(f.isExist(NaN), true)
    eq(f.isExist({}), true)

  })

})