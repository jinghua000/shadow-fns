const eq = require('./util/eq')
const f = require('../src')

describe('test sum', function () {
  
  it('test number array', function () {

    eq(f.sum([1, 2, 3, 4]), 10)
    eq(Number.isNaN(f.sum([1, 2, 3, 4, undefined])), true)

  })

  it('test string array', function () {

    eq(f.sum([1, 2, '3']), '33')
    eq(f.sum(['1', 2, 3]), '123')
    eq(f.sum(['', NaN, undefined]), 'NaNundefined')

  })

})