const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test unary', function () {

  it('common case', function () {

    let arr = [1, 2, 3]
    let res1 = f.equals(arr.map(parseInt))([1, NaN, NaN])
    let res2 = arr.map(f.unary(parseInt))

    eq(res1, true)
    equals(res2, [1, 2, 3])

  })
  
  it('rest parameter', function () {

    let printArguments = (...args) => args
    let printFirst = f.unary(printArguments)

    equals(printArguments(1, 2, 3), [1, 2, 3])
    equals(printFirst(1, 2, 3), [1])

  })

  // not support context see test/nAry.js

})