# shadow-fns

[![Build Status](https://travis-ci.org/jinghua000/shadow-fns.svg?branch=master)](https://travis-ci.org/jinghua000/shadow-fns)
[![npm module](https://badge.fury.io/js/shadow-fns.svg)](https://www.npmjs.com/package/shadow-fns)
[![Coverage Status](https://coveralls.io/repos/github/jinghua000/shadow-fns/badge.svg?branch=master)](https://coveralls.io/github/jinghua000/shadow-fns?branch=master)
[![Dependency Status](https://david-dm.org/jinghua000/shadow-fns.svg)](https://david-dm.org/jinghua000/shadow-fns)

## Introduction

A javascript function library.  

This library referenced [ramda](https://ramdajs.com) and [lodash](https://lodash.com/),
especially [ramda](https://ramdajs.com).  

Chasing for more simplify and singleness function.  

...Okay, just for my own preference.

## Features

- Pure Function
- Functional
- Currying
- Pointfree
- No Context
- Close To Native
- More semantic

```js
f.pipe(f.length, f.gt(5)) 
// => Means check the supplied parameter's length whether longer than 5.

f.tryCatch(JSON.parse, f.always({})) 
// => Means try parse the supplied parameter, when throw an error will return `{}`.

f.pipe(f.map(f.prop('age')), f.sum)
// => Means get every `age` property from the list to an array, then sum it.
```

All functions read from left-to-right with humanized semantics.

## Usage

### Browser

```html
<script src="./dist/shadow-fns.umd.min.js"></script>
```

> You can also import from CDN  
> 
> https://cdn.jsdelivr.net/npm/shadow-fns/dist/shadow-fns.umd.js  
> https://cdn.jsdelivr.net/npm/shadow-fns/dist/shadow-fns.umd.min.js  

then

```html
<script>

f.identity(10) // => 10

</script>
```

### Node

```bash
npm i -D shadow-fns
```

or

```bash
yarn add --dev shadow-fns
```

then in cjs

```javascript
const f = require('shadow-fns')
```

or in es

```javascript
import { * as f } from 'shadow-fns'
```

then

```javascript
const users = [
  { name: 'dog', age: 5 },
  { name: 'cat', age: 7 },
  { name: 'human', age: 12 }
]

const sumAge = f.pipe(
  f.map(f.prop('age')), 
  f.sum
)

sumAge(users) // => 24
```

or just import the required functions

```javascript
import { pipe, add, multiply } from 'shadow-fns'

const calc = pipe(add(2), multiply(2))

calc(3) // => 10
```

And if you are using es module, you can import source code directly,

which can show the comments and jump to the source in some IDE, will do much help to develop.  

```javascript
import { * as f } from 'shadow-fns/src'
```

## Documentation

You can check the [Full API documentation](https://github.com/jinghua000/shadow-fns/blob/master/doc/README.md).

And I propose you to read the [Usage Instruction](https://github.com/jinghua000/shadow-fns/blob/master/doc/USAGE_INSTRUCTION.md),
it will be helpful.

And if you'd like to contribute, see the [Contributing Guide](https://github.com/jinghua000/shadow-fns/blob/master/CONTRIBUTING.md).

And [Changelog](https://github.com/jinghua000/shadow-fns/blob/master/CHANGELOG.md) is here.

## Try

[Click Me!](https://jinghua000.github.io/shadow-fns/index.html)