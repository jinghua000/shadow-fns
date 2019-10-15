const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test throttle', function () {
  
  it('test', function () {

    let arr = []
    let push = () => arr.push(123)

    let fn = f.throttle(100)(push)

    ;(async () => {

      fn() // => works
      fn() // => not work
      fn() // => not work
      await f.sleep(50)('') // 50 < 100
      fn() // => not work
      await f.sleep(80)('') //  50 + 80 = 130 > 100 
      fn() // => works 
      await f.sleep(120)('') // 120 > 100
      fn() // => works
      fn() // => not work

      equals(arr, [123, 123, 123])

    })()

  })

  it('return will be retained', function () {
    
    let num = 0
    let add = () => num += 1

    let fn = f.throttle(100)(add)

    eq(fn(), 1)
    eq(fn(), 1)
    eq(fn(), 1)

    setTimeout(() => eq(fn(), 2), 120)
    setTimeout(() => eq(fn(), 2), 130)
    setTimeout(() => eq(fn(), 2), 140)

    setTimeout(() => eq(num, 2), 150)

  })

})