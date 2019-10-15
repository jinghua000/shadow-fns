const eq = require('./util/eq')
const f = require('../src')

describe('test indexOf', function () {
  
  it('test array', function () {

    let findIndex = f.indexOf(1)

    eq(findIndex([3, 2, 1, 1, 2, 3]), 2)
    eq(findIndex([3, 2, '1', '1', 2, 3]), -1)

  })

  it('test string', function () {

    let findIndex = f.indexOf(1)

    eq(findIndex('321123'), 2)
    eq(findIndex('320023'), -1)

  })

  it('special NaN', function () {

    let not = NaN

    eq(f.indexOf(not)([not, not]), -1)
    eq(f.indexOf(NaN)([NaN, NaN]), -1)
    eq(f.indexOf(NaN)('NaNNaN'), 0)

  })

  it('find object', function () {

    let obj = {}

    eq(f.indexOf({})([{}, {}, {}]), -1)
    eq(f.indexOf(obj)([obj, obj, {}]), 0)

  })

  it('second argument for array', function () {
    // find from the index to right

    let find = f.indexOf(1, 1)
    // out of range means not exist
    let find2 = f.indexOf(1, 999)

    eq(find([1, 1, 1, 1]), 1)
    eq(find([1, 2, 1, 2]), 2)

    eq(find2([1, 2, 1, 2]), -1)

  })

  it('second argument for string', function () {
    // find from the index to right

    let find = f.indexOf(1, 1)
    // out of range means not exist
    let find2 = f.indexOf(1, 999)

    eq(find('1111'), 1)
    eq(find('1212'), 2)

    eq(find2('1212'), -1)

  })

  it('negative number for array', function () {

    let find = f.indexOf(1, -2)
    // out of range means whole array
    let find2 = f.indexOf(1, -999)

    eq(find([1, 1, 1, 1]), 2)
    eq(find([2, 1, 2, 1]), 3)

    eq(find2([2, 1, 2, 1]), 1)

  })

  it('negative number for string', function () {

    // means 0 for string
    let find = f.indexOf(1, -2)
    let find2 = f.indexOf(1, -999)

    eq(find('1111'), 0)
    eq(find('2121'), 1)

    eq(find2('2121'), 1)

  })

})