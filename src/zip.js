/**
 * Create a new array from the supplied arrays,  
 * every index corresponding value of them will compose to a new item.  
 * 
 * And the new array's length will same as the first supplied array.  
 * 
 * @param {...Array} arr 
 * @return {Array}
 * @since 0.1.7
 * @category Array
 * @sign ([a], [b], [c], ...) -> [[a, b, c, ...], ...]
 * @example
 * 
 * const weathers = ['windy', 'sunny', 'cloudy']
 * const marks = [0, 1, 2]
 * 
 * f.zip(weathers, marks) // => [['windy', 0], ['sunny', 1], ['cloudy', 2]]
 */
const zip = (...arr) => {
  const first = arr[0] || []
  const length = first.length
  const result = []

  let i = 0
  while (i < length) {
    result[i] = arr.map(elem => elem[i])

    i++
  }

  return result
}

export default zip