const eq = require('./util/eq')
const f = require('../src')

describe('test toLower', function () {
  
  it('test string', function () {

    let str = 'AbCd'
    eq(f.toLower(str), 'abcd')
    eq(str, 'AbCd')
    
  })

  it('with chinese', function () {

    let str = '我是Sam'
    eq(f.toLower(str), '我是sam')
    eq(str, '我是Sam')

  })

})