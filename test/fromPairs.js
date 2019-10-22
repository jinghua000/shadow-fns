const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test fromPairs', function () {
  
  it('common case', function () {

    equals(f.fromPairs(
      [['a', 1], ['b', 2]]
    ), { a: 1, b: 2 })

  })

  it('if key has repeat, use the rightmost', function () {

    equals(f.fromPairs(
      [['a', 1], ['b', 2], ['a', 3]]
    ), { a: 3, b: 2 })

  })

  it('support Symbol', function () {

    let key = Symbol()

    equals(
      f.fromPairs([[key, 123]]),
      { [key]: 123 }
    )

  })

  it('other key type will convert to string', function () {

    let arr = [[undefined, 123], [null, 123], [{}, 123]]

    equals(
      f.fromPairs(arr), 
      { undefined: 123, null: 123, "[object Object]": 123 }
    )

  })

})