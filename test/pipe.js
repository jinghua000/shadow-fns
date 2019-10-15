const eq = require('./util/eq')
const f = require('../src')

describe('test pipe', function () {
  
  it('test function pipe', function () {

    let addA = f.add('a')
    let addB = f.add('b')
    let addC = f.add('c')
    let addABC = f.pipe(addA, addB, addC)
    let addABC2 = f.pipe(addA, f.pipe(addB, addC))
    let addABC3 = f.pipe(f.pipe(addA, addB), addC)
    let addABC4 = f.pipe(f.pipe(f.pipe(addA, addB, addC)))

    eq(addABC('123'), '123abc')
    eq(addABC2('123'), '123abc')
    eq(addABC3('123'), '123abc')
    eq(addABC4('123'), '123abc')

  })

  it('test pipe with combine functions', function () {

    let arr = [
      { name: 'aa', val: 2 },
      { name: 'bb', val: 3 },
      { name: 'cc', val: 4 },
      { name: 'dd', val: 5 },
      { name: 'ee', val: 6 },
    ]

    let res

    let valgt2 = f.pipe(f.prop('val'), f.gt(2))

    let nameltdd = f.pipe(f.prop('name'), f.lt('dd'))

    let nameeqee = f.pipe(f.prop('name'), f.eq('ee'))

    let sumName = f.pipe(f.map(f.prop('name')), f.join(','))

    let cond = e => valgt2(e) && nameltdd(e) || nameeqee(e)

    // get names where val greater than 2 and name less than dd or name equal ee
    let getNameInRange = f.pipe(f.filter(cond), sumName)

    res = getNameInRange(arr)

    eq(res, 'bb,cc,ee')

    // get all val and add 1 and sum
    let getValAdd1 = f.pipe(f.map(f.prop('val')), f.map(f.add(1)), f.sum)

    res = getValAdd1(arr)

    eq(res, 25)

    // compose(map(f), map(g)) == map(compose(f, g))

    getValAdd1 = f.pipe(f.map(f.pipe(f.prop('val'), f.add(1))), f.sum)

    res = getValAdd1(arr)

    eq(res, 25)

  })

  it('test context', function () {

    // beware that `pipe` not support context
    // need bind first

    let obj = {
      num: 0,
      reset () { 
        this.num = 0 
      },
      sum () {
        this.add1()
        this.add2()
        this.add3()
      },
      add1 () {
        this.num += 1
      },
      add2 () {
        this.num += 2
      },
      add3 () {
        this.num += 3
      },
    }

    obj.sum()

    eq(obj.num, 6)

    obj.reset()

    let fn = f.pipe(obj.sum)

    try {
      fn()
    } catch (err) {
      // can't read num of undefined
      eq(err instanceof TypeError, true)
    }

    // need bind first
    fn = f.pipe(obj.sum.bind(obj))

    fn()

    eq(obj.num, 6)

  })

  it('test async', function () {
    
    let fn = f.pipe(
      f.always('a'), 
      f.sleep(500), 
      f.then(f.add('b')), 
      f.then(f.add('c')),
    )

    fn().then(res => eq(res, 'abc'))

  })

})