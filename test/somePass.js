const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test somePass', function () {
  
  it('exit when condition return true', function () {

    let arr = []
    
    let fn = f.somePass(
      () => arr.push(1) && false, 
      () => arr.push(2) && true, 
      () => arr.push(3) && false, 
    )
    
    fn()

    equals(arr, [1, 2])

  })

  it('default false', function () {

    eq(f.somePass()(), false)

  })

})