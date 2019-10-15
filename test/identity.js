const eq = require('./util/eq')
const f = require('../src')

describe('test identity', function () {

  it('common value', function () {
    
    eq(f.identity(10), 10)
    eq(f.identity(), undefined)
    eq(f.identity(null), null)

  })

  it('identity object', function () {

    let obj = {}

    eq(f.identity(obj) === obj, true)

  })
  
})