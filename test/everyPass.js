const eq = require('./util/eq')
const f = require('../src')

describe('test everyPass', function () {
  
  it('test', function () {
    
    let fn = f.everyPass(
      f.T, 
      f.pipe(f.trace('test1'), f.T), 
      f.T,
      f.pipe(f.trace('test2'), f.T), 
      f.F,
      f.pipe(f.trace('test3'), f.T), 
    )

    eq(fn('everyPass'), false)
    // test3 will not log

  })

  it('default true', function () {

    eq(f.everyPass()(), true)

  })

})