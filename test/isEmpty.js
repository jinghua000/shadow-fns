const eq = require('./util/eq')
const f = require('../src')

describe('test isEmpty', function () {
  
  it('test basic type', function () {

    eq(f.isEmpty([]), true)
    eq(f.isEmpty({}), true)
    eq(f.isEmpty(''), true)
    eq(f.isEmpty(undefined), true)
    eq(f.isEmpty(null), true)

    eq(f.isEmpty(Array(5)), false)
    eq(f.isEmpty([,,,]), false)
    eq(f.isEmpty([undefined]), false)
    eq(f.isEmpty(' '), false)
    eq(f.isEmpty(() => {}), false)
    eq(f.isEmpty(NaN), false)
    eq(f.isEmpty(new Map()), false)
    eq(f.isEmpty(new Set()), false)

  })

  it('others', function () {

    function A () {}
    A.prototype.aa = 123

    function B () { this.aa = 123 }

    let a = new A()
    let b = new B()

    eq(f.isEmpty(a), true)
    eq(f.isEmpty(b), false)
    eq(f.isEmpty(f.dissoc('aa')(b)), true)

    let arr = f.reject(f.isNil)([null, undefined,,,])

    eq(f.isEmpty(arr), true)

  })

})