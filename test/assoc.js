const notEquals = require('./util/notEquals')
const equals = require('./util/equals')
const f = require('../src')

describe('test assoc', function () {
  
  it('associate object', function () {

    let obj = { a: 123 }
    let obj2 = f.assoc('b', 'assoc')(obj)

    equals(obj, { a: 123 })
    equals(obj2, { a: 123, b: 'assoc' })

  })

  it('can\'t associate array', function () {

    let arr = [1, 2, 3]
    let arr2 = f.assoc(1, 0)(arr)

    equals(arr, [1, 2, 3])
    notEquals(arr2, [1, 0, 3])

  })

  it('cover the key', function () {

    let obj = { a: 123 }
    let obj2 = f.assoc('a', 234)(obj)

    equals(obj, { a: 123 })
    equals(obj2, { a: 234 })

  })

  it('is shallow copy', function () {

    let obj = { a: 123, b: { a: 234 } }
    let obj2 = f.assoc('a', 234)(obj)

    obj2.b.a = 'change'
    
    equals(obj, { a: 123, b: { a: 'change' } })
    equals(obj2, { a: 234, b: { a: 'change' } })

  })

  it('key is not string', function () {

    let s = Symbol()
    let obj = {}

    equals(f.assoc(s, 123)(obj), { [s]: 123 })

  })

  it('test curry', function () {

    equals(f.assoc('a', 123, {}), f.assoc('a')(123)({}))

  })

})