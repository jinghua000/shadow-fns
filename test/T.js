const eq = require('./util/eq')
const f = require('../src')

describe('test T', function () {
  
  it('always return true', function () {

    eq(f.T(), true)
    eq(f.T(123), true)
    eq(f.T(true), true)
    eq(f.T(null), true)

  })

})