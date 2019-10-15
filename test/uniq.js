const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test uniq', function () {
  
  it('test uniq with number', function () {

    let arr1 = [1, 2, 2, NaN, NaN]
    let arr2 = f.uniq(arr1)

    equals(arr1.length, 5)
    equals(f.equals(arr2)([1, 2, NaN]), true) 

  })

  it('test other types', function () {

    let arr = [null, null, false, false, undefined, undefined]
    equals(f.uniq(arr), [null, false, undefined])

  })

  it('test object', function () {

    let arr1 = [{}, {}]
    let arr2 = f.uniq(arr1)

    equals(arr2, [{}, {}])
    
  })

})