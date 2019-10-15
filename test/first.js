const eq = require('./util/eq')
const f = require('../src')

describe('test first', function () {
  
  it('test string', function () {

    let str = 'i have a plan'

    eq(f.first(str), 'i')

  })

  it('test array', function () {

    let arr = [1, 2, 3, 4, 5]

    eq(f.first(arr), 1)

  })

})