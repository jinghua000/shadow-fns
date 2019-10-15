const eq = require('./util/eq')
const f = require('../src')

describe('test min', function () {
  
  it('min number', function () {

    let arr = [1, 3, 10, 4, 1, 9]
    eq(arr.reduce(f.min), 1)

  })

  it('min string', function () {

    let arr = ['a', 'ab', 'ac', 'bc', 'b']
    eq(arr.reduce(f.min), 'a')

  })

})