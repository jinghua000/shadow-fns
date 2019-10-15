const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test times', function () {
  
  it('common function', function () {

    let fn3 = f.times(3, f.identity)
    
    equals(fn3(1), [1, 1, 1])

  })

})