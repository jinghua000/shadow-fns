const equals = require('./util/equals')
const f = require('../src')

describe('test pickBy', function () {
  
  it('test object value', function () {

    let obj = {
      happy: 15,
      sad: 20,
      despair: 25,
    }

    let pick = f.pickBy(f.lte(20))

    equals(pick(obj), {
      happy: 15,
      sad: 20
    })

    equals(obj, {
      happy: 15,
      sad: 20,
      despair: 25,
    })

  })

  it('test object key', function () {

    let obj = { a: 1, b: 2, c: 3 }
    let pickBy = f.pickBy((v, k) => k >= 'b')

    equals(pickBy(obj), { b: 2, c: 3 })
    equals(obj, { a: 1, b: 2, c: 3 })

  })

  it('not exist', function () {

    equals(f.pickBy(f.F)({ a: 123 }), {})

  })

  it('shallow copy', function () {

    let obj1 = { a: {} }
    let obj2 = f.pickBy(f.equals({}))(obj1)

    equals(obj1, { a: {} })
    equals(obj2, { a: {} })

    obj1.a.a = 123

    equals(obj1, { a: { a: 123 } })
    equals(obj2, { a: { a: 123 } })

  })

  it('not support prototype chain', function () {

    class C {

      constructor () {
        this.a = 123
      }

    }
    
    C.prototype.cc = 123

    let c = new C()

    equals(f.pickBy(f.equals(123))(c), { a: 123 })

  })

})