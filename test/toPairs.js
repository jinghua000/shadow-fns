const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test toPairs', function () {
  
  it('common case', function () {

    equals(f.toPairs({ a: 1, b: 2 }), [['a', 1], ['b', 2]])
    equals(f.toPairs({}), [])

  })

  it('not support prototype chain', function () {

    function Foo () {
      this.foo = 123
    }

    Foo.prototype.bar = 234

    equals(f.toPairs(new Foo()), [['foo', 123]])

  })

  it('not support Symbol', function () {

    let key = Symbol()
    let obj = { [key]: 123 }

    equals(f.toPairs(obj), [])

  })

})