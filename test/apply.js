const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test apply', function () {
  
  it('common apply', function () {

    let print = (...args) => args
    let fn = f.apply(print)

    equals(fn([1, 2, 3]), [1, 2, 3])

  })

  it('test curry', function () {

    equals(f.apply(f.identity, [1]), f.apply(f.identity)([1]))

  })

})