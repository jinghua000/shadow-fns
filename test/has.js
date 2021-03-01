const eq = require('./util/eq')
const f = require('../src')

describe('test has', function () {
  
  it('test object', function () {

    let hasA = f.has('a')

    eq(hasA({ a: 123 }), true)
    eq(hasA({ b: 123 }), false)

  })

  it('can read the key even which is unEnumerable', function () {

    let hasA = f.has('a')
    let obj = {}

    Object.defineProperty(obj, 'a', {
      enumerable: false,
      value: 123
    })

    eq(hasA(obj), true)
    
  })

  it('can\'t read prototype chain', function () {

    class C {}
    C.prototype.aa = 123

    let c = new C()

    eq(f.prop('aa')(c), 123)
    eq(f.has('aa')(c), false)

  })

  it('support arrays', function() {


    eq(f.has(0, [[]]), true)
    eq(f.has(0, []), false)

  })


})