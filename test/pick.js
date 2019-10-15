const equals = require('./util/equals')
const f = require('../src')

describe('test pick', function () {
  
  it('pick object', function () {

    let pickAB = f.pick(['a', 'b'])
    let obj = { a: 123, b: 234, c: 345 }

    equals(pickAB(obj), { a: 123, b: 234 })
    equals(obj, { a: 123, b: 234, c: 345 })

  })

  it('value will be undefined if key not exist', function () {

    let pickC = f.pick(['c'])
    let obj = { a: 123, b: 234 }

    equals(pickC(obj), { c: undefined })

  })

  it('support prototype chain', function () {

    class C {}
    C.prototype.cc = 123

    let c = new C()
    let pickCC = f.pick(['cc'])
    
    equals(pickCC(c), { cc: 123 })

  })

  it('shallow copy', function () {

    let obj = { a: {} }
    let obj2 = f.pick(['a'])(obj)
    
    equals(obj, { a: {} })
    equals(obj2, { a: {} })

    obj2.a.a = 123

    equals(obj, { a: { a: 123 } })
    equals(obj2, { a: { a: 123 } })

  })

})