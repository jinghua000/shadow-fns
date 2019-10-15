import random from './random'

/**
 * Shuffle the array and return a new array
 * 
 * Shallow Copy
 * 
 * @param {Array} arr
 * @return {Array}
 * @category Array
 * @sign [a] -> [a]
 * @example
 * 
 * let arr = [1, 2, 3]
 * 
 * f.shuffle(arr) // => [2, 3, 1]
 */
const shuffle = arr => {
  let _arr = [].concat(arr)
  let length = _arr.length
  let maxIndex = length - 1
  let i = 0

  while (i < length) {
    let rand = random(i, maxIndex)
    let val = _arr[rand]

    _arr[rand] = _arr[i]
    _arr[i] = val

    i++
  }

  return _arr
}

export default shuffle