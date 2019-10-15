const equals = require('./util/equals')
const f = require('../src')

describe('test dissoc', function () {
  
  it('dissociate object', function () {

    let obj = { a: 123, b: 234 }
    let obj2 = f.dissoc('b')(obj)

    equals(obj, { a: 123, b: 234 })
    equals(obj2, { a: 123 })

  })

  it('is shallow copy', function () {

    let obj = { a: 123, b: { a: 234 } }
    let obj2 = f.dissoc('a')(obj)

    obj2.b.a = 'change'
    
    equals(obj, { a: 123, b: { a: 'change' } })
    equals(obj2, { b: { a: 'change' } })

  })

  it('key is not string', function () {

    let s = Symbol()
    let obj = { [s]: 123, b: 234 }

    equals(f.dissoc(s)(obj), { b: 234 })

  })

  it('test curry', function () {

    equals(f.dissoc('a', { a: 1 }), f.dissoc('a')({ a: 1 }))

  })

})