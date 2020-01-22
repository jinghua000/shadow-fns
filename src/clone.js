import keys from './keys'
import type from './type'
import tap from './tap'

/**
 * Deep copy the object and return a new object
 * 
 * Support `[]` and `{}`, others will return themself
 * 
 * **NOTE:** Not support prototype chain
 * 
 * @param {*} data 
 * @return {*}
 * @since 0.1.0
 * @category Tools
 * @sign a -> a
 * @example
 * 
 * const arr = [{}, {}, {}]
 * const arr2 = f.clone(arr) // => [{}, {}, {}]
 * arr[0] === arr2[0] // => false
 */
const clone = data => 
  type(data) === 'Array'
    ? tap(
      arr => data.forEach(v => arr.push(clone(v))), 
      []
    )
    : type(data) === 'Object'
      ? tap(
        obj => keys(data).forEach(k => obj[k] = clone(data[k])), 
        {}
      )
      : data

export default clone