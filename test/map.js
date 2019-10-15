const equals = require('./util/equals')
const f = require('../src')

describe('test map', function () {

  it('map array', function () {

    let mapDouble = f.map(f.multiply(2))
    let arr = [1, 2, 3]

    equals(mapDouble(arr), [2, 4, 6])
    equals(arr, [1, 2, 3])

  })

  it('map have two argument, 2nd argument bind `this`', function () {
    
    let arr = ['a', 'b', 'c']
    let arr2 = [1, 2, 3]
    let mapMethod = f.map(function (e, index) {
      return e + this[index]
    }, arr2)

    equals(mapMethod(arr), ['a1', 'b2', 'c3'])

  })

})
