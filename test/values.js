const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test values', function () {
  
  it('object values', function () {

    let obj = { a: 123, b: null, c: undefined }
    
    equals(f.values(obj), [123, null, undefined])

  })

  it('not support prototype chain', function () {

    function C () {}
    C.prototype.cc = 123

    let c = new C()
    
    equals(f.values(c), [])

  })

  it('can\'t select values which are not enumerable', function () {

    let obj = {}

    Object.defineProperty(obj, 'a', { value: 123 })

    eq(obj.a, 123)
    equals(f.values(obj), [])

  })

  it('order is same as keys', function () {

    let obj = { a: 123, b: 234 }
    let obj2 = { b: 234, a: 123 }

    equals(f.values(obj), [123, 234])
    equals(f.values(obj2), [234, 123])

  })

})