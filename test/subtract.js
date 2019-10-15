const eq = require('./util/eq')
const f = require('../src')

describe('test subtract', function () {

  it('test number', function () {
      
    let res

    res = f.subtract(3)(2)
    eq(res, -1)
    
  })

  it('test others', function () {

    let res 

    res = f.subtract(null)(null)
    eq(res, 0)

    res = f.subtract(true)(false)
    eq(res, -1)

    res = f.subtract('a')('a')
    eq(Number.isNaN(res), true)

  })
  
})