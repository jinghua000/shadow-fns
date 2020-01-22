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

function changeArrayByPush () {
  const arr = []
  arr.push(1)
  arr.push(2)
  arr.push(3)
  arr.push(4)
  arr.push(5)
  return arr
}

function changeArrayByIndex () {
  const arr = []
  arr[0] = 1
  arr[1] = 2
  arr[2] = 3
  arr[3] = 4
  arr[4] = 5
  return arr
}

console.time('changeArrayByPush')
times(3000, changeArrayByPush)()
console.timeEnd('changeArrayByPush')

console.time('changeArrayByIndex')
times(3000, changeArrayByIndex)()
console.timeEnd('changeArrayByIndex')

// => changeArrayByIndex sometimes little faster than changeArrayByPush
