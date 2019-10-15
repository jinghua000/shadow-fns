const equals = require('./util/equals')
const f = require('../src')

describe('test mapObj', function () {

  it('test obj and pure', function () {

    let obj = { a: 1, b: 2, c: 3 }

    equals(
      f.mapObj(f.add(1), obj),
      { a: 2, b: 3, c: 4 }
    )

    equals(obj, { a: 1, b: 2, c: 3 })

  })

  it('test obj props', function () {

    let obj = { a: { num: 1 }, b: { num: 2 } }

    let obj2 = f.mapObj(
      f.pipe(f.prop('num'), f.toArray), 
      obj
    )

    equals(obj2, { a: [1], b: [2] })

  })

  it('with group by', function () {

    let arr = [
      { user: 'White', money: 50 },
      { user: 'White', money: 30 },
      { user: 'White', money: 20 },
      { user: 'Black', money: 50 },
      { user: 'Black', money: 100 },
    ]

    let groupMoneyByUser = f.pipe(
      f.groupBy(f.prop('user')),
      f.mapObj(f.map(f.prop('money')))
    )

    equals(
      groupMoneyByUser(arr),
      {
        White: [50, 30, 20],
        Black: [50, 100],
      }
    )

  })

})
