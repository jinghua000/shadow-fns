const eq = require('./util/eq')
const f = require('../src')

describe('test sleep', function () {
  
  it('with then', function () {

    let num = 0
    let addx = x => num += x
    f.sleep(500)(5)
      .then(addx)

    eq(num, 0)

    setTimeout(() => {
      eq(num, 5)
    }, 700)

  })

  it('with async', function () {

    let num = 0

    ;(async () => {
      await f.sleep(500)('')
      num = 5
    })()

    eq(num, 0)

    setTimeout(() => {
      eq(num, 5)
    }, 700)

  })

  it('with pipe', function () {

    let fn = f.pipe(
      f.sleep(500),
      f.then(f.add('pipe'))
    )

    fn('i am ').then(res => eq(res, 'i am pipe'))

  })

  it('with pipeAsync', function () {

    let fn = f.pipeAsync(
      f.sleep(500),
      f.add('pipeAsync')
    )

    fn('i am ').then(res => eq(res, 'i am pipeAsync'))

  })

})