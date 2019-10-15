const eq = require('./util/eq')
const f = require('../src')

describe('test curryN', function () {
  
  it('curry three parameters', function () {

    let join = (...args) => args.join('')
    let join3 = f.curryN(3)(join)

    eq(join(1, 2, 3, 4), '1234')
    eq(join3(1)(2)(3), '123')
    eq(join3(1, 2)(3), '123')
    eq(join3(1)(2, 3), '123')
    eq(join3(1, 2, 3), '123')

    // over number will throw an error
    let err

    try {
      join3(1)(2)(3)(4)
    } catch (e) {
      err = e
    } finally {
      eq(err instanceof TypeError, true)
    }

  })

  // not support context see test/curry.js

})