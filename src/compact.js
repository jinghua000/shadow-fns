import pickBy from './pickBy'
import isNil from './isNil'
import opposite from './opposite'
import type from './type'

/**
 * If is Array select the elements which are not nil
 * 
 * If is Object pick the keys which them values are not nil
 * 
 * If is String remove all the space
 * 
 * All of above return a new datum
 * 
 * Others return them self
 * 
 * And nil means `null` or `undefined`
 * 
 * @param {Array|Object|String} data 
 * @return {Array|Object|String}
 * @since 0.1.0
 * @category Tools
 * @sign a -> a
 * @see isNil
 * @example
 * 
 * f.compact([0, 1, 2, null, undefined]) // => [0, 1, 2]
 * f.compact({ name: 'dog', age: null }) // => { name: 'dog' }
 * f.compact(' i have a plan ') // => ihaveaplan
 */
const compact = data => 
  type(data) === 'Array'
    ? data.filter(opposite(isNil))
    : type(data) === 'Object'
      ? pickBy(opposite(isNil))(data)
      : type(data) === 'String'
        ? data.replace(/\s/g, '')
        : data

export default compact