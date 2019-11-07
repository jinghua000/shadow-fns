const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test everyPass', function () {
  
  it('exit when condition return false', function () {
    
    let arr = []
    
    let fn = f.everyPass(
      () => arr.push(1) && true, 
      () => arr.push(2) && false, 
      () => arr.push(3) && true, 
    )
    
    fn()

    equals(arr, [1, 2])

  })

  it('default true', function () {

    eq(f.everyPass()(), true)

  })

})