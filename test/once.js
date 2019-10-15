const eq = require('./util/eq')
const f = require('../src')

describe('test once', function () {
  
  it('called once', function () {

    let add1 = f.add(1)
    let addOnce = f.once(add1)

    eq(addOnce(10), 11)
    eq(addOnce(20), 11)
    eq(addOnce(30), 11)

  })

  it('not support context', function () {

    let obj = {
      a: 123,
      b () { return this.a += 1 }
    }

    // need bind first
    let fn = f.once(obj.b.bind(obj))

    eq(fn(), 124)
    eq(fn(), 124)
    eq(fn(), 124)

  })

})