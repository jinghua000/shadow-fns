const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test opposite', function () {
  
  it('common case', function () {
    
    let fn = f.opposite(f.T)

    eq(fn(), false)

  })

  it('combine usage', function () {

    let arr = [1, 2, 3, 4, 5]
    let gt3 = f.gt(3)

    equals(arr.filter(gt3), [4, 5])
    equals(arr.filter(f.opposite(gt3)), [1, 2, 3])

  })

  it('not support context', function () {

    let obj = { 
      a: true,
      b () { return this.a }
    }
    
    // need bind first
    let fn = f.opposite(obj.b.bind(obj))

    eq(fn(), false)

  })

})