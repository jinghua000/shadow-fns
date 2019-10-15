const eq = require('./util/eq')
const f = require('../src')

describe('test divide', function () {
  
  it('test number', function () {

    let divide3 = f.divide(3)

    eq(divide3(9), 3)
    eq(divide3(6), 2)
    eq(f.divide(2)(5), 2.5)

  })

  it('test others', function () {

    eq(f.divide(false)(true), Infinity)
    eq(f.divide(true)(false), 0)
    eq(Number.isNaN(f.divide(false)(false)), true)
    eq(Number.isNaN(f.divide('a')('a')), true)

  })

})