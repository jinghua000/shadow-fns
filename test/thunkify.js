const eq = require('./util/eq')
const f = require('../src')

describe('test thunkify', function () {
  
  it('thunkify of function', function () {

    let sum = (a, b, c) => a + b + c
    let waitSum = f.thunkify(sum)('a', 'b', 'c')

    eq(waitSum(), 'abc')

  })

  // oh, i know that this function not support context

})