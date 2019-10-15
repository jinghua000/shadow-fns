const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test binary', function () {

  it('common case', function () {

    let printThree = (a, b, c) => [a, b, c]
    let printTwo = f.binary(printThree)

    equals(printThree('a', 'b', 'c'), ['a', 'b', 'c'])
    equals(printTwo('a', 'b', 'c'), ['a', 'b', undefined])

  })
  
  it('rest parameter', function () {

    let printArguments = (...args) => args
    let printFirstTwo = f.binary(printArguments)

    equals(printArguments(1, 2, 3), [1, 2, 3])
    equals(printFirstTwo(1, 2, 3), [1, 2])

  })

  // not support context see test/nAry.js

})