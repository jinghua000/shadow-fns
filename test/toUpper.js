const eq = require('./util/eq')
const f = require('../src')

describe('test toUpper', function () {
  
  it('test string', function () {

    let str = 'AbCd'
    eq(f.toUpper(str), 'ABCD')
    eq(str, 'AbCd')
    
  })

  it('with chinese', function () {

    let str = '我是Sam'
    eq(f.toUpper(str), '我是SAM')
    eq(str, '我是Sam')

  })

})