const equals = require('./util/equals')
const f = require('../src')

describe('test reject', function () {
  
  it('reject array', function () {

    let notGreaterThan3 = f.reject(f.gt(3))
    let arr = [1, 2, 3, 4, 5]

    equals(notGreaterThan3(arr), [1, 2, 3])
    equals(arr, [1, 2, 3, 4, 5])

  })

  // this is not native method and not support 2nd argument

})