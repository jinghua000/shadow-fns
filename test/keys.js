const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test keys', function () {
  
  it('object keys', function () {

    let obj = { a: 123, b: null, c: undefined }
    
    equals(f.keys(obj), ['a', 'b', 'c'])

  })

  it('not support prototype chain', function () {

    function C () {}
    C.prototype.cc = 123

    let c = new C()
    
    equals(f.keys(c), [])

  })

  it('can\'t select keys which are not enumerable', function () {

    let obj = {}

    Object.defineProperty(obj, 'a', { value: 123 })

    eq(obj.a, 123)
    equals(f.keys(obj), [])

  })

})