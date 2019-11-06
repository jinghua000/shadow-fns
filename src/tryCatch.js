import _curry2 from './internal/_curry2'

/**
 * Call the first function 
 * 
 * If throw an error, call the next
 * 
 * @param {Function} tryer 
 * @param {Function} catcher 
 * @return {Function}
 * @since 0.1.0
 * @category Tools, curry2
 * @sign (...a -> b, ...a -> c) -> (...a -> b | c)
 * @example
 * 
 * let parse = f.tryCatch(JSON.parse, f.always({}))
 * 
 * parse(JSON.stringify({ a: 1 })) // => { a: 1 }
 * parse({ a: 1 }) // => {}
 */
const tryCatch = _curry2((tryer, catcher) => (...args) => {
  let result 

  try {
    result = tryer(...args)
  } catch (err) {
    result = catcher(...args)
  } finally {
    return result
  }
})

export default tryCatch