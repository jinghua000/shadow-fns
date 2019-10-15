const eq = require('./util/eq')
const f = require('../src')

describe('test not', function () {
  
  it('opposite boolean', function () {

      eq(f.not(true), false)
      eq(f.not([]), false)
      eq(f.not({}), false)
      eq(f.not('123'), false)
      eq(f.not(123), false)

      eq(f.not(), true)
      eq(f.not(null), true)
      eq(f.not(NaN), true)
      eq(f.not(0), true)
      eq(f.not(''), true)
      eq(f.not(false), true)

  })

})