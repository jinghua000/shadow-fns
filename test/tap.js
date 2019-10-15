const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test tap', function () {
  
  it('tap object', function () {

    let obj = {}
    let fn = _obj => _obj.a = 123
    
    equals(f.tap(f.assoc('a', 123))(obj), {})
    equals(f.tap(fn)(obj), { a: 123 })
    equals(obj, { a: 123 })

  })

  it('tap others', function () {

    let num = 123

    // if the params isn't object, it will not be change
    eq(f.tap(f.add(1))(num), 123)
    eq(num, 123)

  })

})