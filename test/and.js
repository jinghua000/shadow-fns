const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test and', function () {
  
  it('if second parameter false return second params', function () {
    
    eq(f.and('999')(0), 0)
    eq(f.and(null)(undefined), undefined)
    eq(f.and(undefined)(null), null)

  })

  it('if second parameter true return first params', function () {

    eq(f.and(false)(true), false)
    eq(f.and(234)(123), 234)
    equals(f.and([1, 2, 3])('123'), [1, 2, 3])
    equals(f.and({})([]), {})

  })

})