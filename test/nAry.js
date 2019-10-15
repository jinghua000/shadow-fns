const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test nAry', function () {

  it('common case', function () {

    let printTwo = (a, b) => [a, b]
    let printOne = f.nAry(1)(printTwo)

    equals(printTwo('a', 'b'), ['a', 'b'])
    equals(printOne('a', 'b'), ['a', undefined])

  })
  
  it('rest parameter', function () {

    let printArguments = (...args) => args
    let printFirstTwo = f.nAry(2)(printArguments)

    equals(printArguments(1, 2, 3), [1, 2, 3])
    equals(printFirstTwo(1, 2, 3), [1, 2])

  })

  it('not support context', function () {

    let obj = { a: 1 }

    function printX (x) {
      return this[x]
    }

    let printY = f.nAry(1)(printX)

    eq(printX.call(obj, 'a'), 1)

    try {
      eq(printY.call(obj, 'a'), 1)
    } catch (err) {
      eq(err.message, `Cannot read property 'a' of undefined`)
      eq(err instanceof TypeError, true)
    }

    // need bind first
    printY = f.nAry(1)(printX.bind(obj))
    eq(printY.call(obj, 'a'), 1)

  })

})