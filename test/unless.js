const eq = require('./util/eq')
const f = require('../src')

describe('test unless', function () {
  
  it('test', function () {

    let cannotBelow3 = f.unless(f.gt(3), f.always('so small'))

    eq(cannotBelow3(5), 5)
    eq(cannotBelow3(1), 'so small')

  })

})