const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test or', function () {
  
  it('if second parameter false return first params', function () {
    
    eq(f.or('999')(0), '999')
    eq(f.or(null)(undefined), null)
    eq(f.or(undefined)(null), undefined)

  })

  it('if second parameter true return second params', function () {

    eq(f.or(false)(true), true)
    eq(f.or(234)(123), 123)
    equals(f.or([1, 2, 3])('123'), '123')
    equals(f.or({})([]), [])

  })

})