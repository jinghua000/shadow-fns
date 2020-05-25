import pickBy from './pickBy'
import isEmpty from './isEmpty'
import opposite from './opposite'
import type from './type'

/**
 * If is Array select the elements which are not `empty`
 * 
 * If is Object pick the keys which them values are not `empty`
 * 
 * If is String remove all the space
 * 
 * All of above return a new datum
 * 
 * Others return them self
 * 
 * And `empty` means `null` or `undefined` or `[]` or `{}` or `''`
 * 
 * @param {Array|Object|String} data 
 * @return {Array|Object|String}
 * @since 0.1.8
 * @category Tools
 * @sign a -> a
 * @see isEmpty, compact
 * @example
 * 
 * f.deepCompact([0, false, [], {}, '', null, undefined]) // => [0, false]
 * f.deepCompact({ name: 'dog', age: '', children: [] }) // => { name: 'dog' }
 * f.deepCompact(' i have a plan ') // => ihaveaplan
 */
const deepCompact = data => 
  type(data) === 'Array'
    ? data.filter(opposite(isEmpty))
    : type(data) === 'Object'
      ? pickBy(opposite(isEmpty), data)
      : type(data) === 'String'
        ? data.replace(/\s/g, '')
        : data

export default deepCompact