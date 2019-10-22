const equals = require('./util/equals')
const f = require('../src')

describe('test toArray', function () {
  
  it('parameter is not array will return a array of it', function () {

    equals(f.toArray('fff'), ['fff'])
    equals(f.toArray(null), [null])

  })

  it('pass array will return self', function () {

    let arr = [1, 2, 3]
    let arr1 = [1, 2, [3]]

    equals(f.toArray(arr), arr)
    equals(f.toArray(arr1), arr1)

  })

})