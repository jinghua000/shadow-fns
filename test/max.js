const eq = require('./util/eq')
const f = require('../src')

describe('test max', function () {
  
  it('max number', function () {

    let arr = [1, 3, 10, 4, 10, 9]
    eq(arr.reduce(f.max), 10)

  })

  it('max string', function () {

    let arr = ['a', 'ab', 'ac', 'bc', 'b']
    eq(arr.reduce(f.max), 'bc')

  })

})