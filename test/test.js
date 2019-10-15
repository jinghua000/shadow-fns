const eq = require('./util/eq')
const f = require('../src')

describe('test test', function () {
  
  it('test regexp', function () {

    let test = f.test(/hello/)
    eq(test('hello world'), true)
    eq(test('goodbye world'), false)

  })

  // well, here will not test other difficult case

})