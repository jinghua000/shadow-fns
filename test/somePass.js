const eq = require('./util/eq')
const f = require('../src')

describe('test somePass', function () {
  
  it('test', function () {
    
    let fn = f.somePass(
      f.F, 
      f.pipe(f.trace('test1'), f.F), 
      f.F,
      f.pipe(f.trace('test2'), f.F), 
      f.T,
      f.pipe(f.trace('test3'), f.F), 
    )

    eq(fn('somePass'), true)
    // test3 will not log

  })

  it('default false', function () {

    eq(f.somePass()(), false)

  })

})