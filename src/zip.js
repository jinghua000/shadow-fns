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