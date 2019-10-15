const eq = require('./util/eq')
const f = require('../src')

describe('test join', function () {
  
  it('join array', function () {

    let arr = ['i', 'have', 'a', 'plan']
    eq(f.join(' ')(arr), 'i have a plan')

  })

})