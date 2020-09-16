const { add, times } = require('../lib')

function invokeWithCurry () {
  return add(1)(2)
}

function invokeWithoutCurry () {
  return add(1, 2)
}

console.time('invokeWithCurry')
times(1000, invokeWithCurry)()
console.timeEnd('invokeWithCurry')

console.time('invokeWithoutCurry')
times(1000, invokeWithoutCurry)()
console.timeEnd('invokeWithoutCurry')

// => invokeWithoutCurry much faster than invokeWithCurry