const eq = require('./util/eq')
const f = require('../src')

describe('test trim', function () {
  
  it('test string', function () {

    let str = ' i have a plan '
    eq(f.trim(str), 'i have a plan')
    eq(str, ' i have a plan ')

  })

})