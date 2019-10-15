const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test clone', function () {
  
  it('clone array', function () {

    let arr = [1, 2, [3, 4]]
    let arr2 = f.clone(arr)
    arr2[0] = 0
    arr2[2][1] = 0

    equals(arr, [1, 2, [3, 4]])
    equals(arr2, [0, 2, [3, 0]])

    let arrx = [{}, {}, {}]
    eq(f.clone(arrx)[0] === arrx[0], false)

  })

  it('clone object', function () {

    let obj = { a: 123, b: { a: 234 } }
    let obj2 = f.clone(obj)

    obj2.a = 234
    obj2.b.a = 123

    equals(obj, { a: 123, b: { a: 234 } })
    equals(obj2, { a: 234, b: { a: 123 } })

  })

  it('clone others', function () {

    let str = 'yes'

    eq(f.clone(str), 'yes')
    eq(f.clone(null), null)
    eq(f.clone(), undefined)

  })

  it('not clone prototype chain', function () {

    function C () { this.cc = 123}
    C.prototype.dd = 234
    let c = new C()

    eq(f.clone(c).cc, 123)
    eq(f.clone(c).dd, undefined)

  })

})