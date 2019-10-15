const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test debounce', function () {
  
  it('test', function () {

    let arr = []
    let push = () => arr.push(123)

    let fn = f.debounce(100)(push)

    ;(async () => {

      fn()
      fn()
      fn()
      await f.sleep(20)('') // => not work
      fn()
      await f.sleep(30)('') // => not work
      fn()
      await f.sleep(110)('') // => it works here 110 > 100
      fn()
      fn()
      await f.sleep(120)('') // => it works here 120 > 100

      equals(arr, [123, 123])

    })()

  })

  it('return undefined', function () {

    let num = 0
    let add = () => num += 1

    let fn = f.debounce(100)(add)

    eq(fn(), undefined)
    eq(fn(), undefined)
    eq(fn(), undefined)

    eq(num, 0)
    setTimeout(() => eq(num, 1), 120)

  })

})