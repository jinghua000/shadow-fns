const eq = require('./util/eq')
const f = require('../src')

describe('test call', function () {
  
  it('call with curried function return curried function', function () {

    eq(f.call(f.add)(1)(2), 3)
    eq(f.call(f.add)(1, 2), 3)
    eq(f.call(f.add, 1, 2), 3)

  })

  it('call with not curried function return not curried function', function () {

    eq(f.call(Number, '1'), 1)

    let err 

    try {
      eq(f.call(Number)(1), 1)
    } catch (e) {
      err = e 
    } finally {
      eq(err instanceof TypeError, true)
    }

    eq(f.call(f.curry(Number))(1), 1)

  })

})