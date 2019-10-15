# shadow-fns

[![npm module](https://badge.fury.io/js/shadow-fns.svg)](https://www.npmjs.com/package/shadow-fns)

## Introduction

A javascript function library.  

This library referenced [ramda](https://ramdajs.com) and [lodash](https://lodash.com/),
especially [ramda](https://ramdajs.com).  

Chasing for more simplify and singleness function.  

...Okay, just for my own preference.

## Keywords

- Pure Function
- Currying
- Pointfree
- No Context
- Close To Native

## Usage

**in browser:**

```html
<script src="./dist/shadow-fns.min.js"></script>
```

then

```html
<script>

f.identity(10) // => 10

</script>
```

**in node:**

```bash
npm i -D shadow-fns
```

or

```bash
yarn add --dev shadow-fns
```

then

```javascript
const f = require('shadow-fns')
```

or

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

If you are using pack tools like webpack, you can import source code directly,

which can show the comments and jump to the source, will do much help to develop.  

```javascript
import { * as f } from 'shadow-fns/src'
```

## Documentation

You can check the [Full API documentation](https://github.com/jinghua000/shadow-fns/blob/master/doc/README.md).

It's a little big, so you can download it and view with local Markdown Viewer for best experience.

And I propose you read the [Usage Instruction](https://github.com/jinghua000/shadow-fns/blob/master/doc/USAGE_INSTRUCTION.md),
it will be helpful.

## Reference

- https://ramdajs.com/docs/  
- https://lodash.com/docs  
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript  
