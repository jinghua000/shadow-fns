# Usage Instruction

Here are some usage instructions which can maybe help you using more smoothly.

See also [Full API documentation](./README.md).

## Global specification

- Almost all functions designed as `function first, data last`, mainly for make currying more simplify.  
- All functions are using `arrow-function`, and **NOT** support context, if you want read the context, bind it before you use.

## Category introduction

### Logic

This category contains some basic logic, it's simple to use but notice that they are always `function first, data last`

For Example  

```js
f.add('a', 'b') // => 'ba'
```

This returns `ba` but not `ab`, 
because `b` is the last data.

And this function means add something to data.

So, add `a` to `b`

```js
'b' + 'a' // => 'ba'
```

Others such as

```js
f.or('yes', false) // => false || yes => false

f.gt(3, 4) // => 4 > 3 => false
```

### Tools

This category supply some useful tools, 
they can deal with some specific logic,
see the documentation for details.

```js
f.type({}) // => Object

f.type([]) // => Array

f.isEmpty({}) // => true

f.ramdom(1, 5) // => 3

// etc...
```

### Array

Like Tools, this category supply some functions work with `Array`.

```js
f.sum([1, 2, 3]) // => 6

f.faltten([1, [2], [[3]]]) // => [1, 2, 3]

// etc...
```

### Object

Like Tools, this category supply some functions work with `Object`.

```js
f.pick(['a'], { a: 123, b: 234 }) // => { a: 123 }

f.prop('a', { a: 123 }) // => 123

// etc...
```

### Native

This category is little different with others.

Supply some methods close to native.

Change native methods format to `function first, data last`

Such as `f.map`, is similar to `Array.prototype.map`

```js
f.map(f.add(1))([1, 2, 3]) // => [2, 3, 4]
```

Is same as

```js
;[1, 2, 3].map(f.add(1)) // => [2, 3, 4]
```

But you **CANNOT** write like this

```js
f.map(f.add(1), [1, 2, 3]) // => ERROR!
```

Because this category methods support all arguments of native method.

```js
let arr = [1, 2, 3]
let arr2 = [2, 3, 4]

f.map(function (elem, index) {
  return elem + this[index] // `this` point to `arr`
}, arr)(arr2) // => [3, 5, 7]
```

Beware that and they are almost not curried.

### Function

Supply some functions to deal functions.

Maybe have some fantastic effects.

```js
let fn = (a, b, c) => a + b + c
let fn1 = f.curry(fn)

fn1(1)(2)(3) // => 1 + 2 + 3 => 6

let calc = f.pipe(f.add(1), f.multiply(2), f.subtract(3))

calc(3) // => (3 + 1) * 2 - 3 => 5

// etc...
```

## Curried

Currying, it's an exciting programming way. 

You can write like this

```js
f.add(1, 2) // => 3
```

or this 

```js
f.add(1)(2) // => 3
```

But **NOT ALL** methods are curried.

See the [API doucmentation](./README.md), if `Category` has curried, it is curried.

Just like `add, prop, has, ...`

But some not support currying, they are almost `rest` or `unary` or `native` function

Like `pipe, toArray, map, ...`

And beware, curried functions real execute when they have enough arguments

```js
f.add(1)() // => this will not work

f.add(1)()()()(2) // => 3
```

## Trace

If you have a long long function chain, 
how to get the state of it.

Use `f.trace`

```js
let fn = f.pipe(
  f.add(1), 
  f.add(1), 
  f.trace('what i am?'),
  f.add(1),
)

fn(3) // => logs: what i am: 5, and return 6
```

or in promise chain

```js
Promise
  .resolve(3)
  .then(f.add(1))
  .then(f.add(1))
  .then(f.trace('what i am?'))
  .then(f.add(1))
  
// => logs: what i am: 5, and resolve 6
```

## ...