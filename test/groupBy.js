const equals = require('./util/equals')
const f = require('../src')

describe('test groupBy', function () {

  it('simple test', function () {

    let arr, group

    arr = [1, 2, 3, 4, 5, 6]

    group = f.groupBy(
      e => e < 5 ? 'small' : 'big'
    )(arr)

    equals(group, {
      'small': [1, 2, 3, 4],
      'big': [5, 6]
    })

    equals(arr, [1, 2, 3, 4, 5, 6])

  })

  it('list test', function () {

    let arr, group

    arr = [
      { name: 'aa', level: 10 },
      { name: 'bb', level: 15 },
      { name: 'cc', level: 20 },
      { name: 'dd', level: 25 },
      { name: 'ee', level: 30 },
    ]

    group = f.groupBy(e => 
      e.level <= 15 ? 'weak' : 
      e.level <= 25 ? 'medium' : 
      'strong'
    )(arr)

    equals(group, {
      'weak': [{ name: 'aa', level: 10 }, { name: 'bb', level: 15 }],
      'medium': [{ name: 'cc', level: 20 }, { name: 'dd', level: 25 }],
      'strong': [{ name: 'ee', level: 30 }]
    })

    equals(arr, [
      { name: 'aa', level: 10 },
      { name: 'bb', level: 15 },
      { name: 'cc', level: 20 },
      { name: 'dd', level: 25 },
      { name: 'ee', level: 30 },
    ])

  })

})