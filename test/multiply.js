const eq = require('./util/eq')
const f = require('../src')

describe('test multiply', function () {
  
  it('test number', function () {

    let multiply2 = f.multiply(2)

    eq(multiply2(3), 6)
    eq(multiply2(4), 8)
    eq(multiply2(1.2), 2.4)

  })

  it('test others', function () {

    eq(f.multiply(false)(true), 0)
    eq(f.multiply(true)(false), 0)
    eq(f.multiply(false)(false), 0)
    eq(Number.isNaN(f.multiply('a')('a')), true)

  })

})