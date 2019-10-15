const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test shuffle', function () {
  
  it('test', function () {

    let arr

    for (let i = 0; i < 100; i++) {
      arr = f.shuffle([1, 2, 3, 4, 5])
      eq(f.sum(arr), 15)
      eq(f.length(arr), 5)
    }

  })

})