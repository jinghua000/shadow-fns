const eq = require('./util/eq')
const f = require('../src')

describe('test VERSION', function () {
  
  it('test', function () {

    eq(f.VERSION, '1.0.1')

  })

})