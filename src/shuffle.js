import random from './random'

/**
 * Shuffle the array and return a new array
 * 
 * Shallow Copy
 * 
 * @param {Array} arr
 * @return {Array}
 * @since 0.1.0
 * @category Array
 * @sign [a] -> [a]
 * @example
 * 
 * const arr = [1, 2, 3]
 * 
 * f.shuffle(arr) // => [2, 3, 1]
 */
const shuffle = arr => {
  const _arr = [].concat(arr)
  const length = _arr.length
  const maxIndex = length - 1
  
  let i = 0
  while (i < length) {
    const rand = random(i, maxIndex)
    const val = _arr[rand]

    _arr[rand] = _arr[i]
    _arr[i] = val

    i++
  }

  return _arr
}

export default shuffle