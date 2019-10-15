/**
 * Similar to `f.curryN`
 * 
 * @see curryN
 */
const _curryN = n => fn => {
  const curried = (...args) => 
    args.length < n
      ? (...args2) => curried(...args, ...args2)
      : fn(...args)
  return curried
}

export default _curryN