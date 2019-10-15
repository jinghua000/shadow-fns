const eq = require('./util/eq')
const f = require('../src')

describe('test F', function () {
  
  it('always return false', function () {

    eq(f.F(), false)
    eq(f.F(123), false)
    eq(f.F(true), false)
    eq(f.F(null), false)

  })

})