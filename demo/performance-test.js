const { add, times } = require('../lib')

function invokeWithCurry () {
  return add(1)(2)
}

function invokeWithoutCurry () {
  return add(1, 2)
}

console.time('with curry')
times(1000, invokeWithCurry)()
console.timeEnd('with curry')

console.time('without curry')
times(1000, invokeWithoutCurry)()
console.timeEnd('without curry')
