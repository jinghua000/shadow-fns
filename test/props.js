const equals = require('./util/equals')
const f = require('../src')

describe('test props', function () {
  
  it('test object', function () {

    let obj = { a: 1, b: 2, c: 3 }
    let values1 = f.props(['a', 'b', 'c', 'd'])(obj)
    let values2 = f.props(['a', 'b'])(obj)

    equals(values1, [1, 2, 3, undefined])
    equals(values2, [1, 2])

  })

  // more see test/prop.js

})