const eq = require('./util/eq')
const f = require('../src')

describe('test last', function () {
  
  it('test string', function () {

    let str = 'i have a plan'

    eq(f.last(str), 'n')

  })

  it('test array', function () {

    let arr = [1, 2, 3, 4, 5]

    eq(f.last(arr), 5)

  })

})