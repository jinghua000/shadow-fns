const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test merge', function () {
  
  it('merge object', function () {

    let obj1 = { a: 123 }
    let obj2 = { b: 234 }
    let obj3 = f.merge(obj1, obj2)

    equals(obj1, { a: 123 })
    equals(obj2, { b: 234 })
    equals(obj3, { a: 123, b: 234 })

  })

  it('shallow copy', function () {

    let obj1 = { a: { a: 123 } }
    let obj2 = f.merge(obj1)
    obj2.a.a = 234

    equals(obj1, { a: { a: 234 } })
    equals(obj2, { a: { a: 234 } })

  })

  it('not support prototype chain', function () {

    function C () {}
    C.prototype.cc = 123

    let c = new C()
    
    eq(c.cc, 123)
    equals(f.merge(c), {})
    equals(f.merge(c).cc, undefined)

  })

})