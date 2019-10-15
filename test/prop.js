const eq = require('./util/eq')
const f = require('../src')

describe('test prop', function () {
  
  it('test prop of object', function () {

    let obj = { a: 1 }

    eq(f.prop('a')(obj), 1)
    eq(f.prop('b')(obj), undefined)

  })

  it('test prototype chain', function () {
    
    function C () {
      this.aa = 123
    }

    C.prototype.bb = 234

    let c = new C()

    Object.defineProperty(c, 'cc', { value: 345 })

    eq(f.prop('aa')(c), 123)
    eq(f.prop('bb')(c), 234)
    eq(f.prop('cc')(c), 345)

  })

  it('test equals of object', function () {

    let obj = { a: {} }

    eq(f.prop('a')(obj), obj.a)

  })

  it('test prop of array', function () {

    let arr = [1, 2, 3]

    eq(f.prop(0)(arr), 1)
    eq(f.prop(4)(arr), undefined)
    // can't use negative index
    eq(f.prop(-1)(arr), undefined)

  })

  it('test prop for others', function () {

    let err 

    eq(f.prop('x')(0), undefined)

    try {
      f.prop('x')(null)
    } catch (e) {
      err = e
    }

    eq(err instanceof TypeError , true)

  })

})