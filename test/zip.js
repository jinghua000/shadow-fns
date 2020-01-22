const equals = require('./util/equals')
const f = require('../src')

describe('test zip', function () {
  
  it('should zip several arrays', function () {

    let ret = f.zip([1,2,3], [4,5,6], [7,8,9])
    equals(ret, [[1,4,7], [2,5,8], [3,6,9]])

  })

  it('should return empty array if without arguments', function () {

    equals(f.zip(), [])

  })

  it(`result array's elements's length should equal with the first supplied array`, function () {

    let ret = f.zip([1,2], [3,4,5], [6,7,8])
    equals(ret, [[1,3,6], [2,4,7]])

  })

  it(`if first supplied array's length longer than others, result's corresponding elemnent use undefined instead`, function () {

    let ret = f.zip([1, 2, 3], [1], [1, 2])
    equals(ret, [[1,1,1], [2, undefined, 2], [3, undefined, undefined]])

  })

  it(`not curried`, function () {

    equals(f.zip([1,2,3]), [[1], [2], [3]])

  })

})