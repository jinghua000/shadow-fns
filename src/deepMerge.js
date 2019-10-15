import type from './type'

/**
 * Deep merge some objects from `left-to-right`
 * and return a new object
 * 
 * Supplied object will not change
 * 
 * **NOTE:** Only support `{}`
 * 
 * @param {...Object} args 
 * @return {Object}
 * @category Object
 * @sign ({ k: a }, { k: b }, ..., { k: n }) -> { k: n }
 * @example
 * 
 * let obj1 = { a: { a: 123, b: 234 } }
 * let obj2 = { a: { a: 234 } }
 * 
 * f.deepMerge(obj1, obj2) // => { a: { a: 234, b: 234 } }
 */
const deepMerge = (...args) => {
  let length = args.length

  if (length < 2 ) return args[0]
  
  let obj1 = Object.assign({}, args[0])
  let obj2 = Object.assign({}, args[1])

  Object.keys(obj2).forEach(
    k => obj1[k] = type(obj1[k]) === 'Object' && type(obj2[k]) === 'Object'
      ? deepMerge(obj1[k], obj2[k])
      : obj2[k]
  )

  return deepMerge(obj1, ...args.slice(2))
}

export default deepMerge