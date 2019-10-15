import _curry2 from './internal/_curry2'
import isNil from './isNil'

/**
 * Check the element is the instance of supplied constructor
 * 
 * Support prototype chain 
 * 
 * @param {Function} constructor 
 * @param {*} e 
 * @return {Boolean}
 * @category Tools, curried
 * @sign Function -> x -> Boolean
 * @see type
 * @example
 * 
 * class C {}
 * let c = new C()
 * 
 * f.is(C)(c) // => true  
 * f.is(Object)(c) // => true  
 * f.is(Object)([]) // => true
 * f.is(Number)(10) // => true
 * f.is(String)(10) // => false
 */
const is = _curry2((constructor, e) => !isNil(e) && e.constructor === constructor ||  e instanceof constructor)

export default is 