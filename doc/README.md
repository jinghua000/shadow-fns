# API documentation  

## Category  

### Logic 

- [F](#F)  
- [T](#T)  
- [add](#add)  
- [and](#and)  
- [asc](#asc)  
- [desc](#desc)  
- [divide](#divide)  
- [eq](#eq)  
- [equals](#equals)  
- [gt](#gt)  
- [gte](#gte)  
- [lt](#lt)  
- [lte](#lte)  
- [max](#max)  
- [min](#min)  
- [multiply](#multiply)  
- [not](#not)  
- [or](#or)  
- [subtract](#subtract)  


### Tools 

- [always](#always)  
- [ascend](#ascend)  
- [both](#both)  
- [clone](#clone)  
- [compact](#compact)  
- [cond](#cond)  
- [descend](#descend)  
- [either](#either)  
- [everyPass](#everyPass)  
- [first](#first)  
- [identity](#identity)  
- [ifElse](#ifElse)  
- [is](#is)  
- [isEmpty](#isEmpty)  
- [isExist](#isExist)  
- [isNil](#isNil)  
- [last](#last)  
- [length](#length)  
- [nth](#nth)  
- [random](#random)  
- [sleep](#sleep)  
- [somePass](#somePass)  
- [tap](#tap)  
- [times](#times)  
- [toArray](#toArray)  
- [trace](#trace)  
- [tryCatch](#tryCatch)  
- [type](#type)  
- [unless](#unless)  
- [when](#when)  


### Array 

- [difference](#difference)  
- [flatten](#flatten)  
- [groupBy](#groupBy)  
- [intersection](#intersection)  
- [none](#none)  
- [reject](#reject)  
- [shuffle](#shuffle)  
- [sortWith](#sortWith)  
- [sum](#sum)  
- [union](#union)  
- [uniq](#uniq)  


### Object 

- [assoc](#assoc)  
- [deepMerge](#deepMerge)  
- [dissoc](#dissoc)  
- [has](#has)  
- [hasPath](#hasPath)  
- [mapObj](#mapObj)  
- [merge](#merge)  
- [omit](#omit)  
- [path](#path)  
- [pathEq](#pathEq)  
- [pathOr](#pathOr)  
- [pick](#pick)  
- [pickBy](#pickBy)  
- [prop](#prop)  
- [propEq](#propEq)  
- [propOr](#propOr)  
- [props](#props)  


### Native 

- [catch](#catch)  
- [concat](#concat)  
- [endsWith](#endsWith)  
- [every](#every)  
- [filter](#filter)  
- [find](#find)  
- [findIndex](#findIndex)  
- [forEach](#forEach)  
- [includes](#includes)  
- [indexOf](#indexOf)  
- [join](#join)  
- [keys](#keys)  
- [lastIndexOf](#lastIndexOf)  
- [map](#map)  
- [match](#match)  
- [reduce](#reduce)  
- [replace](#replace)  
- [reverse](#reverse)  
- [slice](#slice)  
- [some](#some)  
- [sort](#sort)  
- [splice](#splice)  
- [split](#split)  
- [startsWith](#startsWith)  
- [test](#test)  
- [then](#then)  
- [toLower](#toLower)  
- [toUpper](#toUpper)  
- [trim](#trim)  
- [values](#values)  


### Function 

- [after](#after)  
- [apply](#apply)  
- [applyTo](#applyTo)  
- [before](#before)  
- [binary](#binary)  
- [cacheWith](#cacheWith)  
- [call](#call)  
- [construct](#construct)  
- [curry](#curry)  
- [curryN](#curryN)  
- [debounce](#debounce)  
- [flip](#flip)  
- [nAry](#nAry)  
- [once](#once)  
- [opposite](#opposite)  
- [partial](#partial)  
- [partialRight](#partialRight)  
- [pipe](#pipe)  
- [pipeAsync](#pipeAsync)  
- [throttle](#throttle)  
- [thunkify](#thunkify)  
- [unary](#unary)  
- [uncurry](#uncurry)  
- [uncurryN](#uncurryN)  


### Other 

- [VERSION](#VERSION)  


  

<a name="F"></a>

## F ⇒ <code>Boolean</code>
Always return `false`

**Category**: [Logic](#logic)  
**Sign**: x -> Boolean  
**See**: [T](#T)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| _ | <code>\*</code> | 

**Example**  
```js
f.F() // => fasle
f.F(10) // => fasle
f.F(null) // => fasle
```
  

[View source](../src/F.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="T"></a>

## T ⇒ <code>Boolean</code>
Always return `true`

**Category**: [Logic](#logic)  
**Sign**: x -> Boolean  
**See**: [F](#F)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| _ | <code>\*</code> | 

**Example**  
```js
f.T() // => true
f.T(10) // => true
f.T(null) // => true
```
  

[View source](../src/T.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="VERSION"></a>

## VERSION : <code>String</code>
Library's version

**Category**: [Other](#other)  
**Since**: 0.1.4  
**Example**  
```js
f.VERSION // => 0.1.4
```
  

[View source](../src/VERSION.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="add"></a>

## add ⇒ <code>Number</code> \| <code>String</code>
Like `+`

The second parameter add the first

**Category**: [Logic](#logic), curried  
**Sign**: a -> a -> a  
**See**: [subtract](#subtract)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 
| e | <code>\*</code> | 

**Example**  
```js
f.add(1)(2) // => 3
f.add('a')('b') // => 'ba'
f.add(undefined)(undefined) // => NaN
```
  

[View source](../src/add.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="after"></a>

## after ⇒ <code>function</code>
Merge a function to the supplied function and return a new function

When call the new function,
first call the `fn` then call the `fnx`
with the same arguments

New function's returns same as the origin function

**Category**: [Function](#function), curried  
**Sign**: (...x -> a) -> (...x -> b) -> (...x -> b)  
**See**: [before](#before)  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| fnx | <code>function</code> | After function |
| fn | <code>function</code> | Origin function |

**Example**  
```js
let fn = () => console.log('i am coming')
let fnx = () => console.log('i am after')
   
fn = f.after(fnx)(fn)

fn()
// logs: i am coming
// logs: i am after
```
  

[View source](../src/after.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="always"></a>

## always ⇒ <code>\*</code>
Always return the first parameter

**Category**: [Tools](#tools)  
**Sign**: a -> x -> a  
**See**: [identity](#identity)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| e | <code>\*</code> | 
| _ | <code>\*</code> | 

**Example**  
```js
let obj = {}

f.always(10)(123) // => 10
f.always(10)(null) // => 10
f.always(obj)() === obj // => true
```
  

[View source](../src/always.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="and"></a>

## and ⇒ <code>\*</code>
Like `&&`

Return the second if the second parameter is not true

Return the first if the second parameter is true

**Category**: [Logic](#logic), curried  
**Sign**: a -> b -> b | a  
**See**: [or](#or)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 
| e | <code>\*</code> | 

**Example**  
```js
f.and(true)(false) // => false
f.and(10)(20) // => 10
f.and('aaa')(0) // => 0
```
  

[View source](../src/and.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="apply"></a>

## apply ⇒ <code>\*</code>
Pass the array to the function 
and function will called by the rest arguments of array

Similar to `Function.prototype.apply`, but without context

**Category**: [Function](#function), curried  
**Sign**: (...x -> a) -> [x] -> a  
**See**: [call](#call)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| args | <code>Array</code> | 

**Example**  
```js
let print = (...args) => args
let fn = f.apply(print)

fn([1, 2, 3]) // => [1, 2, 3]
```
  

[View source](../src/apply.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="applyTo"></a>

## applyTo ⇒ <code>\*</code>
Apply the arguments to the supplied function

**Category**: [Function](#function)  
**Sign**: ...x -> (...x -> a) -> a  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| ...args | <code>\*</code> | 
| fn | <code>function</code> | 

**Example**  
```js
let fn1 = (...args) => args
let fn2 = (...args) => f.sum(args)
let applyTo = f.applyTo('a', 'b', 'c')
   
applyTo(fn1) // => ['a', 'b', 'c']
applyTo(fn2) // => 'abc'
```
  

[View source](../src/applyTo.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="asc"></a>

## asc ⇒ <code>Number</code>
If the first parameter smaller than the second one, return -1,
if bigger, return 1,
else 0 

Used for sort array in ascending

**Category**: [Logic](#logic), curried  
**Sign**: a -> a -> Number  
**See**: [desc](#desc), [ascend](#ascend)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| a | <code>\*</code> | 
| b | <code>\*</code> | 

**Example**  
```js
let arr = [3,2,1,4,5]

f.sort(f.asc)(arr) // => [1,2,3,4,5]
```
  

[View source](../src/asc.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="ascend"></a>

## ascend ⇒ <code>Number</code>
Pass a function and sort by the returns in ascending

**Category**: [Tools](#tools), curried  
**Sign**: (a -> x) -> a -> a -> Number  
**See**: [asc](#asc), [descend](#descend)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| a | <code>\*</code> | 
| b | <code>\*</code> | 

**Example**  
```js
const users = [
  { name: 'human', age: 12 },
  { name: 'cat', age: 7 },
  { name: 'dog', age: 5 },
]

const sortByAge = f.sort(f.ascend(f.prop('age')))

sortByAge(users)
// =>
// [
//   { name: 'dog', age: 5 },
//   { name: 'cat', age: 7 },
//   { name: 'human', age: 12 },
// ]
```
  

[View source](../src/ascend.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="assoc"></a>

## assoc ⇒ <code>Object</code>
Return a new object (shallow copy) which associate the key and value

**Category**: [Object](#object), curried  
**Sign**: x -> x -> Object -> Object  
**See**: [dissoc](#dissoc)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| key | <code>\*</code> | 
| val | <code>\*</code> | 
| obj | <code>Object</code> | 

**Example**  
```js
let obj = { a: 123 }

f.assoc('b', 234)(obj) // => { a: 123, b: 234 }
```
  

[View source](../src/assoc.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="before"></a>

## before ⇒ <code>function</code>
Merge a function to the supplied function and return a new function

When call the new function,
first call the `fnx` then call the `fn`
with the same arguments

New function's returns same as the origin function

**Category**: [Function](#function), curried  
**Sign**: (...x -> a) -> (...x -> b) -> (...x -> b)  
**See**: [after](#after)  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| fnx | <code>function</code> | Before function |
| fn | <code>function</code> | Origin function |

**Example**  
```js
let fn = () => console.log('i am coming')
let fnx = () => console.log('i am before')

fn = f.before(fnx)(fn)

fn()
// logs: i am before
// logs: i am coming
```
  

[View source](../src/before.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="binary"></a>

## binary ⇒ <code>function</code>
Pass the first two parameters to supplied function and ignore others

**Category**: [Function](#function)  
**Sign**: ((a, b, ..., z) -> result) -> ((a, b) -> result)  
**See**: [unary](#unary), [uAry](#uAry)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

**Example**  
```js
let printThree = (a, b, c) => [a, b, c]
printThree(1, 2, 3) // => [1, 2, 3]

let printTwo = f.binary(printThree)
printTwo(1, 2, 3) // => [1, 2, undefined]
```
  

[View source](../src/binary.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="both"></a>

## both ⇒ <code>\*</code>
Check the supplied parameters is satisfied both of the two function

First sceond, then first, like `fn2 && fn1`

**Category**: [Tools](#tools), curried  
**Sign**: (...x -> a) -> (...x -> b) -> (...x -> a | b)  
**See**: [either](#either), [everyPass](#everyPass)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn1 | <code>function</code> | 
| fn2 | <code>function</code> | 
| ...args | <code>\*</code> | 

**Example**  
```js
let isBetween = f.both(f.gt(5), f.lt(10))
isBetween(8) // => true
isBetween(11) // => false
```
  

[View source](../src/both.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="cacheWith"></a>

## cacheWith ⇒ <code>function</code>
Pass the `cacheFn` and `fn` to make a new function

When call the new function, 
invoke the `cacheFn` with the passed arguments and record the return as the key,
record the `fn` return as the value

If the key is already exists, 
return the corresponding value without invoke `fn`

**Category**: [Function](#function), curried  
**Sign**: (...x -> a) -> (...x -> a) -> (...x -> a)  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| cacheFn | <code>function</code> | Cache with function |
| fn | <code>function</code> | Origin function |

**Example**  
```js
let num = 0
let add = f.cacheWith(f.identity)(() => num += 1)

add(1) // => 1
add(1) // => 1
add(1) // => 1
add(2) // => 3
```
  

[View source](../src/cacheWith.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="call"></a>

## call ⇒ <code>\*</code>
Pass the supplied arguments to the supplied function.

Similar to `Function.prototype.call`, but without context.

Notice that this function is not curried, 
but if supplied function is curried the result can also be curried.

**Category**: [Function](#function)  
**Sign**: ((...x -> a), ...x) -> a  
**See**: [apply](#apply)  
**Since**: 0.1.4  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| ...args | <code>\*</code> | 

**Example**  
```js
f.call(f.add, 1, 2) // => 3
f.call(f.add)(1, 2) // => 3
f.call(Number, '1') // => 1
f.call(Number)('1') // => ERROR!
```
  

[View source](../src/call.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="catch"></a>

## catch ⇒ <code>Promise</code>
Just like `Promise.prototype.catch`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch

**Category**: [Native](#native)  
**Sign**: Function -> Promise -> Promise  
**See**: [then](#then)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| data | <code>Promise</code> | 

**Example**  
```js
let fetchData = () => Promise.reject({ name: 'Eric' })
let getName = f.catch(f.prop('name'))

getName(fetchData()).then(console.log) // => logs: Eric
```
  

[View source](../src/catch.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="clone"></a>

## clone ⇒ <code>\*</code>
Deep copy the object and return a new object

Support `[]` and `{}`, others will return themself

**NOTE:** Not support prototype chain

**Category**: [Tools](#tools)  
**Sign**: a -> a  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| data | <code>\*</code> | 

**Example**  
```js
let arr = [{}, {}, {}]
let arr2 = f.clone(arr) // => [{}, {}, {}]
arr[0] === arr2[0] // => false
```
  

[View source](../src/clone.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="compact"></a>

## compact ⇒ <code>Array</code> \| <code>Object</code> \| <code>String</code>
If is Array select the elements which are not nil

If is Object pick the keys which them values are not nil

If is String remove all the space

All of above return a new datum

Others return them self

And nil means `null` or `undefined`

**Category**: [Tools](#tools)  
**Sign**: a -> a  
**See**: [isNil](#isNil)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| data | <code>Array</code> \| <code>Object</code> \| <code>String</code> | 

**Example**  
```js
f.compact([0, 1, 2, null, undefined]) // => [0, 1, 2]
f.compact({ name: 'dog', age: null }) // => { name: 'dog' }
f.compact(' i have a plan ') // => ihaveaplan
```
  

[View source](../src/compact.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="concat"></a>

## concat ⇒ <code>Array</code> \| <code>String</code>
Just like the `concat` method of `Array.prototype` and `String.prototype`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

**Category**: [Native](#native)  
**Sign**: ...a -> a -> a  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| ...args | <code>Array</code> \| <code>String</code> | 
| data | <code>Array</code> \| <code>String</code> | 

**Example**  
```js
let str = 'i have'
f.concat(' a', ' plan')(str) // => 'i have a plan'

let arr = [1, 2, 3]
f.concat(4, [5])(arr) // => [1, 2, 3, 4, 5]
```
  

[View source](../src/concat.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="cond"></a>

## cond ⇒ <code>function</code>
Pass some array made of two functions,
first `tryer`, second `handler` like `f.when`

If `tryer` true, call the corresponding `handler` and return,
else next

**Category**: [Tools](#tools)  
**Sign**: ([...a -> b, ...a -> c], [...a -> d, ...a -> e], ...) -> (...a -> c | e | x)  
**See**: [when](#when), [unless](#unless), [ifElse](#ifElse)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| ...conditions | <code>Array.&lt;function()&gt;</code> | 

**Example**  
```js
let judgeMan = f.cond(
  [f.gt(90), f.always('good man')],
  [f.gt(70), f.always('common man')],
  [f.gt(50), f.always('weak man')],
  [f.T, f.always('unless man')]
)

let man1 = { name: 'Dark', point: 80 }
let man2 = { name: 'White', point: 30 }

judgeMan(man1.point) // => 'common man'
judgeMan(man2.point) // => 'unless man'
```
  

[View source](../src/cond.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="construct"></a>

## construct ⇒ <code>Object</code>
This function is used to generate the instance of supplied constructor

Like `new MyClass()`

**Category**: [Function](#function)  
**Sign**: (...x -> a) -> (...x) -> a  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| constructor | <code>function</code> | 
| ...args | <code>\*</code> | 

**Example**  
```js
class Animal {}
let makeAnimal = f.construct(Animal)

makeAnimal('Rabbit') // => new Animal('Rabbit')
```
  

[View source](../src/construct.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="curry"></a>

## curry ⇒ <code>function</code>
Return a curried equivalent function  

**NOTE:** Not support rest parameters  
**NOTE:** Not support default parameters

**Category**: [Function](#function)  
**Sign**: ((a, b, ..., z) -> result) -> a -> b -> ... -> z -> result  
**See**: [curryN](#curryN), [partial](#partial)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

**Example**  
```js
let fn = (a, b, c, d) => a + b + c + d
fn = f.curry(fn)

fn(1, 2, 3, 4) // => 10
fn(1, 2)(3, 4) // => 10
fn(1, 2, 3)(4) // => 10
fn(1)(2, 3, 4) // => 10
fn(1)(2)(3)(4) // => 10
```
  

[View source](../src/curry.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="curryN"></a>

## curryN ⇒ <code>function</code>
Return a equivalent function with `n` curried parameters

Usual used in rest parameters

**Category**: [Function](#function), curried  
**Sign**: Number -> ((a, b, ..., z) -> result) -> a -> b -> ... -> z -> result  
**See**: [curry](#curry), [partial](#partial)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| n | <code>Number</code> | 
| fn | <code>function</code> | 

**Example**  
```js
let join = (...args) => args.join('')
join(1, 2, 3, 4) // => '1234'
join(1, 2, 3) // => '123'

join3 = f.curryN(3)(join)
join3(1, 2, 3) // => '123'
join3(1, 2)(3) // => '123'
join3(1)(2, 3) // => '123'
join3(1)(2)(3) // => '123'
```
  

[View source](../src/curryN.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="debounce"></a>

## debounce ⇒ <code>function</code>
Pass the `ms` and `fn` to create a new function

When invoke the new function, 
delays invoke `fn` until after wait `ms` milliseconds 
from the last time the new function called

**Category**: [Function](#function), curried  
**Sign**: Number -> (...x -> a) -> (...x -> undefined)  
**See**: [throttle](#throttle)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| ms | <code>Number</code> | 
| fn | <code>function</code> | 

**Example**  
```js
let num = 0
let fn = f.debounce(100)(() => num += 1) 

fn()
fn()
fn()

console.log(num) // logs 0
setTimeout(() => console.log(num), 120) // logs 1 after 120 ms
```
  

[View source](../src/debounce.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="deepMerge"></a>

## deepMerge ⇒ <code>Object</code>
Deep merge some objects from `left-to-right`
and return a new object

Supplied object will not change

**NOTE:** Only support `{}`

**Category**: [Object](#object)  
**Sign**: ({ k: a }, { k: b }, ..., { k: n }) -> { k: n }  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| ...args | <code>Object</code> | 

**Example**  
```js
let obj1 = { a: { a: 123, b: 234 } }
let obj2 = { a: { a: 234 } }

f.deepMerge(obj1, obj2) // => { a: { a: 234, b: 234 } }
```
  

[View source](../src/deepMerge.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="desc"></a>

## desc ⇒ <code>Number</code>
If the first parameter smaller than the second one, return 1,
if bigger, return -1,
else 0 

Used for sort array in descending

**Category**: [Logic](#logic), curried  
**Sign**: a -> a -> Number  
**See**: [asc](#asc), [descend](#descend)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| a | <code>\*</code> | 
| b | <code>\*</code> | 

**Example**  
```js
let arr = [3,2,1,4,5]

f.sort(f.desc)(arr) // => [5,4,3,2,1]
```
  

[View source](../src/desc.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="descend"></a>

## descend ⇒ <code>Number</code>
Pass a function and sort by the returns in descending

**Category**: [Tools](#tools), curried  
**Sign**: (a -> x) -> a -> a -> Number  
**See**: [desc](#desc), [ascend](#ascend)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| a | <code>\*</code> | 
| b | <code>\*</code> | 

**Example**  
```js
const users = [
  { name: 'dog', age: 5 },
  { name: 'cat', age: 7 },
  { name: 'human', age: 12 },
]

const sortByAgeDesc = f.sort(f.descend(f.prop('age')))

sortByAgeDesc(users)
// =>
// [
//   { name: 'human', age: 12 },
//   { name: 'cat', age: 7 },
//   { name: 'dog', age: 5 },
// ]
```
  

[View source](../src/descend.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="difference"></a>

## difference ⇒ <code>Array</code>
Return a new uniq array

Select unique elements exist in one array and not in another 

Order from second to first

Use `Array.prototype.includes`

**Category**: [Array](#array), curried  
**Sign**: Array -> Array -> Array  
**See**: [intersection](#intersection), [union](#union), [uniq](#uniq)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| arrx | <code>Array</code> | 
| arr | <code>Array</code> | 

**Example**  
```js
let arr1 = [1, 3, 5]
let arr2 = [3, 5, 7]

f.difference(arr1)(arr2) // => [7, 1]
```
  

[View source](../src/difference.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="dissoc"></a>

## dissoc ⇒ <code>Object</code>
Return a new object (shallow copy) which delete the key

**Category**: [Object](#object), curried  
**Sign**: x -> Object -> Object  
**See**: [dissoc](#dissoc)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| key | <code>\*</code> | 
| obj | <code>Object</code> | 

**Example**  
```js
let obj = { a: 123, b: 234 }

f.dissoc('b')(obj) // => { a: 123 }
```
  

[View source](../src/dissoc.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="divide"></a>

## divide ⇒ <code>Number</code>
Like `/`

The second parameter divide the first

**Category**: [Logic](#logic), curried  
**Sign**: Number -> Number -> Number  
**See**: [multiply](#multiply)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| x | <code>Number</code> | 
| e | <code>Number</code> | 

**Example**  
```js
let divide3 = f.divide(3)

divide3(9) // => 3
divide3(12) // => 4
```
  

[View source](../src/divide.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="either"></a>

## either ⇒ <code>\*</code>
Check the supplied parameters is satisfied either of the two function

First sceond, then first, like `fn2 || fn1`

**Category**: [Tools](#tools), curried  
**Sign**: (...x -> a) -> (...x -> b) -> (...x -> a | b)  
**See**: [both](#both), [somePass](#somePass)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn1 | <code>function</code> | 
| fn2 | <code>function</code> | 
| ...args | <code>\*</code> | 

**Example**  
```js
let isSatisfied = f.either(f.gt(15), f.lt(10))

isSatisfied(8) // => true
isSatisfied(11) // => false
isSatisfied(20) // => true
```
  

[View source](../src/either.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="endsWith"></a>

## endsWith ⇒ <code>Boolean</code>
Just Like `String.prototype.endsWith`  

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

**Category**: [Native](#native)  
**Sign**: String -> String -> Boolean  
**See**: [startsWith](#startsWith)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 
| [length] | <code>Number</code> | 
| data | <code>String</code> | 

**Example**  
```js
let str = 'i have a plan'

f.endsWith('plan')(str) // => true
```
  

[View source](../src/endsWith.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="eq"></a>

## eq ⇒ <code>Boolean</code>
Check two element strict equal by `===`

**Category**: [Logic](#logic), curried  
**See**: [equals](#equals)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 
| e | <code>\*</code> | 

**Example**  
```js
f.eq(1)(1) // => true
f.eq(NaN)(NaN) // => false
f.eq({})({}) // => false
```
  

[View source](../src/eq.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="equals"></a>

## equals ⇒ <code>Boolean</code>
Check every element strict equal by `===`

Support `[]` and `{}`

Also `NaN` considered the same

**NOTE:** Not support prototype chain

**Category**: [Logic](#logic), curried  
**Sign**: a -> b -> Boolean  
**See**: [eq](#eq)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 
| e | <code>\*</code> | 

**Example**  
```js
f.equals([1, 2, 3])([1, 2, 3]) // => true
f.equals([1, 2, 3])([1, 2, '3']) // => false
f.equals({ a: 123 })({ a: 123 }) // => true
```
  

[View source](../src/equals.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="every"></a>

## every ⇒ <code>Boolean</code>
Just like `Array.prototype.every`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

**Category**: [Native](#native)  
**Sign**: (a -> Boolean) -> [a] -> Boolean  
**See**: [some](#some), [none](#none)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| [thisArg] | <code>Array</code> | 
| data | <code>Array</code> | 

**Example**  
```js
let everyGreaterThan3 = f.every(f.gt(3))

everyGreaterThan3([2, 3, 4]) // => false
everyGreaterThan3([4, 5, 6]) // => true
```
  

[View source](../src/every.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="everyPass"></a>

## everyPass ⇒ <code>Boolean</code>
Check the supplied parameters is satisfied of every function

From left-to-right

**Category**: [Tools](#tools)  
**Sign**: (...a -> b, ...a -> c, ...) -> (...a -> Boolean)  
**See**: [somePass](#somePass), [both](#both)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| ...fns | <code>function</code> | 
| ...args | <code>\*</code> | 

**Example**  
```js
let everyPass = f.everyPass(f.gt(5), f.gt(10), f.gt(15))

everyPass(12) // => false
everyPass(20) // => true
```
  

[View source](../src/everyPass.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="filter"></a>

## filter ⇒ <code>Array</code>
Just like `Array.prototype.filter`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

**Category**: [Native](#native)  
**Sign**: (a -> Boolean) -> [a] -> [a]  
**See**: [reject](#reject)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| [thisArg] | <code>Array</code> | 
| data | <code>Array</code> | 

**Example**  
```js
let greaterThan3 = f.filter(f.gt(3))
let arr = [1, 2, 3, 4, 5]

greaterThan3(arr) // => [4, 5]
```
  

[View source](../src/filter.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="find"></a>

## find ⇒ <code>\*</code>
Just like `Array.prototype.find`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

**Category**: [Native](#native)  
**Sign**: (a -> Boolean) -> [a] -> a  
**See**: [findIndex](#findIndex)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| [thisArg] | <code>Array</code> | 
| data | <code>Array</code> | 

**Example**  
```js
let firstBiggerThan2 = f.find(f.gt(2))
let arr = [2, 3, 4, 5]

firstBiggerThan2(arr) // => 3
```
  

[View source](../src/find.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="findIndex"></a>

## findIndex ⇒ <code>Number</code>
Just like `Array.prototype.findIndex`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

**Category**: [Native](#native)  
**Sign**: (a -> Boolean) -> [a] -> Number  
**See**: [find](#find)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| [thisArg] | <code>Array</code> | 
| data | <code>Array</code> | 

**Example**  
```js
let firstIndexBiggerThan2 = f.findIndex(f.gt(2))
let arr = [2, 3, 4, 5]

firstIndexBiggerThan2(arr) // => 1
```
  

[View source](../src/findIndex.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="first"></a>

## first ⇒ <code>\*</code>
Return the first element of the data

**Category**: [Tools](#tools)  
**Sign**: String -> String  
**Sign**: [a] -> a  
**See**: [last](#last), [nth](#nth)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| list | <code>String</code> \| <code>Array</code> | 

**Example**  
```js
let str = 'abcdefg'
f.first(str) // => a

let arr = [1, 2, 3, 4, 5]
f.first(arr) // => 1
```
  

[View source](../src/first.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="flatten"></a>

## flatten ⇒ <code>Array</code>
Deep flatten the array

Return a new array

**NOTE:** Shallow copy

**Category**: [Array](#array)  
**Sign**: Array -> Array  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

**Example**  
```js
let arr = [1, [2], [[3, 4], 5]]

f.flatten(arr) // => [1, 2, 3, 4, 5]
```
  

[View source](../src/flatten.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="flip"></a>

## flip ⇒ <code>function</code>
Return a equivalent function and arguments is flipped!

**Category**: [Function](#function)  
**Sign**: ((a, b, ..., z) -> x) -> ((z, ..., b, a) -> x)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

**Example**  
```js
let print = (...args) => args
let flipPrint = f.flip(print)

print(1, 2, 3) // => [1, 2, 3]
flipPrint(1, 2, 3) // => [3, 2, 1]
```
  

[View source](../src/flip.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="forEach"></a>

## forEach ⇒ <code>Array</code>
Similar to `Array.prototype.forEach`

But return the shallow copy of supplied array

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

**NOTE:** Shallow copy

**Category**: [Native](#native)  
**Sign**: (a -> x) -> [a] -> [a]  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| [thisArg] | <code>Array</code> | 
| data | <code>Array</code> | 

**Example**  
```js
let logElems = f.forEach(f.unary(console.log))

logElems([1, 2, 3]) // => [1, 2, 3]
// logs: 1
// logs: 2
// logs: 3
```
  

[View source](../src/forEach.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="groupBy"></a>

## groupBy ⇒ <code>Object</code>
Group the array by the supplied function

Return a object, function's returns as key, 
satisfied elements as array values

**Category**: [Array](#array), curried  
**Sign**: (a -> b) -> [a] -> { b: [a] }  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| arr | <code>Array</code> | 

**Example**  
```js
let arr = [1, 2, 3, 4, 5]
let group = f.groupBy(e => e < 3 ? 'small' : 'big')

group(arr)
// => { small: [1, 2], big: [3, 4, 5] }
```
  

[View source](../src/groupBy.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="gt"></a>

## gt ⇒ <code>Boolean</code>
Like `>`

Check the second parameter is greater than the first

**Category**: [Logic](#logic), curried  
**Sign**: a -> a -> Boolean  
**See**: [lt](#lt), [gte](#gte)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 
| e | <code>\*</code> | 

**Example**  
```js
let greaterThan5 = f.gt(5)

greaterThan5(6) // => true
greaterThan5(5) // => false
greaterThan5(4) // => false
```
  

[View source](../src/gt.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="gte"></a>

## gte ⇒ <code>Boolean</code>
Like `>=`

Check the second parameter is bigger than or equal with the first

**Category**: [Logic](#logic), curried  
**Sign**: a -> a -> Boolean  
**See**: [lte](#lte), [gt](#gt)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 
| e | <code>\*</code> | 

**Example**  
```js
let greaterOrEuqal5 = f.gte(5)

greaterOrEuqal5(6) // => true
greaterOrEuqal5(5) // => true
greaterOrEuqal5(4) // => false
```
  

[View source](../src/gte.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="has"></a>

## has ⇒ <code>Boolean</code>
Check Object has the supplied key

Use `Object.prototype.hasOwnProperty`

**Category**: [Object](#object), curried  
**Sign**: x -> Object -> Boolean  
**See**: [hasPath](#hasPath)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| key | <code>\*</code> | 
| obj | <code>Object</code> | 

**Example**  
```js
let hasA = f.has('a')

hasA({ a: 123 }) // => true
hasA({ b: 123 }) // => fasle
```
  

[View source](../src/has.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="hasPath"></a>

## hasPath ⇒ <code>Boolean</code>
Check the object has the path

Check every element with `f.has`

**Category**: [Object](#object), curried  
**Sign**: Array -> Object -> Boolean  
**See**: [has](#has)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 
| obj | <code>Object</code> | 

**Example**  
```js
let hasPath = f.hasPath(['a', 'a'])

hasPath({ a: { a: 123 } }) // => true
hasPath({ b: 123 }) // => false
```
  

[View source](../src/hasPath.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="identity"></a>

## identity ⇒ <code>\*</code>
Return the parameter passed and do nothing

It will be useful in some special case

**Category**: [Tools](#tools)  
**Sign**: a -> a  
**See**: [always](#always)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 

**Example**  
```js
let obj = {}

f.identity(10) // => 10
f.identity(obj) === obj // => true
```
  

[View source](../src/identity.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="ifElse"></a>

## ifElse ⇒ <code>function</code>
Pass parameters to the first supplied function,
if true invoke the second one,
else invoke the third one

**Category**: [Tools](#tools), curried  
**Sign**: (...a -> b, ...a -> c, ...a -> d) -> (...a -> c | d)  
**See**: [when](#when), [unless](#unless), [cond](#cond)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| tryer | <code>function</code> | 
| reslover | <code>function</code> | 
| rejecter | <code>function</code> | 

**Example**  
```js
let check3 = f.ifElse(f.gt(3), f.always('so big'), f.always('so small'))
check3(5) // => 'so big'
check3(1) // => 'so small'
```
  

[View source](../src/ifElse.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="includes"></a>

## includes ⇒ <code>Boolean</code>
Just like `includes` of `Array.prototype` and `String.prototype`  

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

**Category**: [Native](#native)  
**Sign**: x -> [a] -> Boolean  
**Sign**: x -> a -> Boolean  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| args | <code>\*</code> | 
| [position] | <code>Number</code> | 
| data | <code>Array</code> \| <code>String</code> | 

**Example**  
```js
let includes = f.includes('yes')

includes(['i', 'say', 'yes', '!']) // => true
includes('i say yes!') // => true
includes('i say no!') // => false
```
  

[View source](../src/includes.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="indexOf"></a>

## indexOf ⇒ <code>Number</code>
Like `indexOf` method of `Array.prototype` and `String.prototype`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

**Category**: [Native](#native)  
**Sign**: x -> a -> Number  
**See**: [lastIndexOf](#lastIndexOf)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| args | <code>\*</code> | 
| [fromIndex] | <code>Number</code> | 
| data | <code>Array</code> \| <code>String</code> | 

**Example**  
```js
let findIndexA = f.indexOf('a')

findIndexA('abcabc') // => 0
findIndexA(['b', 'c', 'a']) // => 2
findIndexA(['b', 'c', 'd']) // => -1
```
  

[View source](../src/indexOf.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="intersection"></a>

## intersection ⇒ <code>Array</code>
Return a new uniq array

Select unique elements both exist in one array and another

Order from second to first

Use `Array.prototype.includes`

**Category**: [Array](#array), curried  
**Sign**: Array -> Array -> Array  
**See**: [difference](#difference), [union](#union), [uniq](#uniq)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| arrx | <code>Array</code> | 
| arr | <code>Array</code> | 

**Example**  
```js
let arr1 = [1, 3, 5]
let arr2 = [7, 5, 3]

f.intersection(arr1)(arr2) // => [5, 3]
```
  

[View source](../src/intersection.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="is"></a>

## is ⇒ <code>Boolean</code>
Check the element is the instance of supplied constructor

Support prototype chain

**Category**: [Tools](#tools), curried  
**Sign**: Function -> x -> Boolean  
**See**: [type](#type)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| constructor | <code>function</code> | 
| e | <code>\*</code> | 

**Example**  
```js
class C {}
let c = new C()

f.is(C)(c) // => true  
f.is(Object)(c) // => true  
f.is(Object)([]) // => true
f.is(Number)(10) // => true
f.is(String)(10) // => false
```
  

[View source](../src/is.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="isEmpty"></a>

## isEmpty ⇒ <code>Boolean</code>
Check the element is equal with one of below
`undefined`, `null`, `''`, `[]`, `{}`

**Category**: [Tools](#tools)  
**Sign**: x -> Boolean  
**See**: [isNil](#isNil)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| e | <code>\*</code> | 

**Example**  
```js
f.isEmpty({}) // => true
f.isEmpty('') // => true
f.isEmpty([undefined]) // => false
```
  

[View source](../src/isEmpty.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="isExist"></a>

## isExist ⇒ <code>Boolean</code>
Check the element is not `undefined` or `null`

**Category**: [Tools](#tools)  
**Sign**: x -> Boolean  
**See**: [isNil](#isNil), [isEmpty](#isEmpty)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| e | <code>\*</code> | 

**Example**  
```js
f.isExist(null) // => false
f.isExist(undefined) // => false
f.isExist('') // => true
f.isExist({}) // => true
```
  

[View source](../src/isExist.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="isNil"></a>

## isNil ⇒ <code>Boolean</code>
Check the element is `undefined` or `null`

**Category**: [Tools](#tools)  
**Sign**: x -> Boolean  
**See**: [isExist](#isExist), [isEmpty](#isEmpty)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| e | <code>\*</code> | 

**Example**  
```js
f.isNil(null) // => true
f.isNil(undefined) // => true
f.isNil('undefined') // => false
```
  

[View source](../src/isNil.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="join"></a>

## join ⇒ <code>String</code>
Just like `Array.prototype.join`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

**Category**: [Native](#native)  
**Sign**: String -> Array -> String  
**See**: [split](#split)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| [separator] | <code>String</code> | 
| data | <code>Array</code> | 

**Example**  
```js
let arr = ['i', 'have', 'a', 'plan']

f.join(' ')(arr) // => 'i have a plan'
```
  

[View source](../src/join.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="keys"></a>

## keys ⇒ <code>Array</code>
Equal with `Object.keys`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

**Category**: [Native](#native)  
**Sign**: Object -> Array  
**See**: [values](#values)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> | 

**Example**  
```js
let obj = { a: 1, b: 2, c: 3 }

keys(obj) // => ['a', 'b', 'c']
```
  

[View source](../src/keys.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="last"></a>

## last ⇒ <code>\*</code>
Return the last element of the data

**Category**: [Tools](#tools)  
**Sign**: String -> String  
**Sign**: [a] -> a  
**See**: [first](#first), [nth](#nth)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| list | <code>String</code> \| <code>Array</code> | 

**Example**  
```js
let str = 'abcdefg'
f.last(str) // => g

let arr = [1, 2, 3, 4, 5]
f.last(arr) // => 5
```
  

[View source](../src/last.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="lastIndexOf"></a>

## lastIndexOf ⇒ <code>Number</code>
Like `lastIndexOf` method of `Array.prototype` and `String.prototype`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

**Category**: [Native](#native)  
**Sign**: x -> a -> Number  
**See**: [indexOf](#indexOf)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| args | <code>\*</code> | 
| [fromIndex] | <code>Number</code> | 
| data | <code>Array</code> \| <code>String</code> | 

**Example**  
```js
let findIndexA = f.lastIndexOf('a')

findIndexA('abcabc') // => 3
findIndexA(['b', 'c', 'a', 'a']) // => 3
findIndexA(['b', 'c', 'd']) // => -1
```
  

[View source](../src/lastIndexOf.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="length"></a>

## length ⇒ <code>Number</code>
Read the `length` property of supplied parameter

**Category**: [Tools](#tools)  
**Sign**: x -> Number  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| e | <code>\*</code> | 

**Example**  
```js
f.length([1, 2, 3]) // => 3
f.length('abc') // => 3
```
  

[View source](../src/length.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="lt"></a>

## lt ⇒ <code>Boolean</code>
Like `<`

Check the second parameter is less than the first

**Category**: [Logic](#logic), curried  
**Sign**: a -> a -> Boolean  
**See**: [gt](#gt), [lte](#lte)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 
| e | <code>\*</code> | 

**Example**  
```js
let lessThan5 = f.lt(5)

lessThan5(6) // => false
lessThan5(5) // => false
lessThan5(4) // => true
```
  

[View source](../src/lt.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="lte"></a>

## lte ⇒ <code>Boolean</code>
Like `<=`

Check the second parameter is less than or equal with the first

**Category**: [Logic](#logic), curried  
**Sign**: a -> a -> Boolean  
**See**: [gte](#gte), [lt](#lt)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 
| e | <code>\*</code> | 

**Example**  
```js
let lessOrEqual5 = f.lte(5)

lessOrEqual5(6) // => false
lessOrEqual5(5) // => true
lessOrEqual5(4) // => true
```
  

[View source](../src/lte.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="map"></a>

## map ⇒ <code>Array</code>
Just Like `Array.prototype.map`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

**Category**: [Native](#native)  
**Sign**: (a -> b) -> [a] -> [b]  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| [thisArg] | <code>Array</code> | 
| arr | <code>Array</code> | 

**Example**  
```js
let mapDouble = f.map(f.multiply(2))

mapSquare([1, 2, 3]) // => [2, 4, 6]
```
  

[View source](../src/map.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="mapObj"></a>

## mapObj ⇒ <code>Object</code>
Like `Array.prototype.map` for `{}`

Supplied a function and object

Return a new object, 
pass every object value to function
and set them as the returns of function

**Category**: [Object](#object), curried  
**Sign**: (a -> b) -> { k: a } -> { k: b }  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| obj | <code>Object</code> | 

**Example**  
```js
let obj = { a: 1, b: 2, c: 3 }
let everyAdd1 = f.mapObj(f.add(1))

everyAdd1(obj) // => { a: 2, b: 3, c: 4 }
```
  

[View source](../src/mapObj.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="match"></a>

## match ⇒ <code>Array</code>
Just like `String.prototype.match`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

**Category**: [Native](#native)  
**Sign**: RegExp -> String -> Array  
**See**: [test](#test)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| args | <code>RegExp</code> | 
| str | <code>String</code> | 

**Example**  
```js
let matchAll = f.match(/\{.*?\}/g)

matchAll('{aa}-{bb}-{cc}')
// => ['{aa}', '{bb}', '{cc}']
```
  

[View source](../src/match.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="max"></a>

## max ⇒ <code>Number</code> \| <code>String</code>
Compare the two parameters and return the bigger one

**Category**: [Logic](#logic), curried  
**Sign**: (a, a) -> a  
**See**: [min](#min)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| a | <code>Number</code> \| <code>String</code> | 
| b | <code>Number</code> \| <code>String</code> | 

**Example**  
```js
let arr = [1, 3, 10, 4, 9]

arr.reduce(f.max) // => 10
```
  

[View source](../src/max.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="merge"></a>

## merge ⇒ <code>Object</code>
Use `Object.assign` to merge the objects passed and return a new object

**NOTE:** Not support prototype chain

**NOTE:** Shallow copy

**Category**: [Object](#object)  
**Sign**: (Object, ...) -> Object  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| ...args | <code>Object</code> | 

**Example**  
```js
let obj1 = { a: 123 }
let obj2 = { b: 234 }

f.merge(obj1, obj2) // => { a: 123, b: 234 }
```
  

[View source](../src/merge.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="min"></a>

## min ⇒ <code>Number</code> \| <code>String</code>
Compare the two parameters and return the smaller one

**Category**: [Logic](#logic), curried  
**Sign**: (a, a) -> a  
**See**: [max](#max)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| a | <code>Number</code> \| <code>String</code> | 
| b | <code>Number</code> \| <code>String</code> | 

**Example**  
```js
let arr = [1, 3, 10, 4, 9]

arr.reduce(f.min) // => 1
```
  

[View source](../src/min.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="multiply"></a>

## multiply ⇒ <code>Number</code>
Like `*`

The second parameter multiply the first

**Category**: [Logic](#logic), curried  
**Sign**: Number -> Number -> Number  
**See**: [divide](#divide)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| x | <code>Number</code> | 
| e | <code>Number</code> | 

**Example**  
```js
let multiply3 = f.multiply(3)

multiply3(2) // => 6
multiply3(3) // => 9
```
  

[View source](../src/multiply.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="nAry"></a>

## nAry ⇒ <code>function</code>
Pass the first `n` parameters to supplied function and ignore others

**Category**: [Function](#function), curried  
**Sign**: Number -> ((a, b, ..., z) -> result) -> ((a, b, ..., n) -> result)  
**See**: [unary](#unary), [binary](#binary)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| n | <code>Number</code> | 
| fn | <code>function</code> | 

**Example**  
```js
let printThree = (a, b, c) => [a, b, c]
printThree(1, 2, 3) // => [1, 2, 3]

let printTwo = f.nAry(2)(printThree)
printTwo(1, 2, 3) // => [1, 2, undefined]
```
  

[View source](../src/nAry.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="none"></a>

## none ⇒ <code>Boolean</code>
Opposite to `Array.prototype.every`

Only support first parameter(Function)

**Category**: [Array](#array), curried  
**Sign**: (a -> Boolean) -> [a] -> Boolean  
**See**: [every](#every), [some](#some)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| arr | <code>Array</code> | 

**Example**  
```js
let noneGreaterThan3 = f.none(f.gt(3))

noneGreaterThan3([1, 2, 3]) // => true
noneGreaterThan3([2, 3, 4]) // => false
```
  

[View source](../src/none.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="not"></a>

## not ⇒ <code>Boolean</code>
Return opposite boolean of the parameter supplied

**Category**: [Logic](#logic)  
**Sign**: x -> Boolean  
**See**: [opposite](#opposite)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| e | <code>\*</code> | 

**Example**  
```js
f.not(true) // => false
f.not(null) // => true
```
  

[View source](../src/not.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="nth"></a>

## nth ⇒ <code>\*</code>
Return the nth element of the data

Support negative number

**Category**: [Tools](#tools)  
**Sign**: Number -> String -> String  
**Sign**: Number -> [a] -> a  
**See**: [first](#first), [last](#last)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| index | <code>Number</code> | 
| list | <code>String</code> \| <code>Array</code> | 

**Example**  
```js
let str = 'abcdefg'
f.nth(3)(str) // => d
f.nth(-2)(str) // => f

let arr = [1, 2, 3, 4, 5]
f.nth(5)(arr) // => undefined
f.nth(-1)(arr) // => 5
```
  

[View source](../src/nth.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="omit"></a>

## omit ⇒ <code>Object</code>
Select the keys of the supplied object
which not exists in supplied array

**NOTE:** Shallow copy

**Category**: [Object](#object), curried  
**Sign**: [k] -> { k: v } -> { k: v }  
**See**: [pick](#pick)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| keys | <code>Array</code> | 
| obj | <code>Object</code> | 

**Example**  
```js
let omit = f.omit(['a', 'b'])
let obj = { a: 1, b: 2, c: 3 }

omit(obj) // => { c: 3 }
```
  

[View source](../src/omit.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="once"></a>

## once ⇒ <code>function</code>
Return a equivalent function of the supplied function

But only called once

The next time called will return the same result

**Category**: [Function](#function)  
**Sign**: (...x -> a) -> (...x -> a)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

**Example**  
```js
let add1 = f.add(1)
let addOnce = f.once(add1)

addOnce(10) // => 11
addOnce(20) // => 11
addOnce(30) // => 11
```
  

[View source](../src/once.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="opposite"></a>

## opposite ⇒ <code>function</code>
Return a function and the returns of that is opposite to the function passed

**Category**: [Function](#function)  
**Sign**: (...x -> result) -> (...x -> !result)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

**Example**  
```js
let gt3 = f.gt(3)
let arr = [1, 2, 3, 4, 5]

arr.filter(gt3) // => [4, 5]
arr.filter(f.opposite(gt3)) // => [1, 2, 3]
```
  

[View source](../src/opposite.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="or"></a>

## or ⇒ <code>\*</code>
Like `||`

Return the second if the second parameter is true

Return the first if the second parameter is not true

**Category**: [Logic](#logic), curried  
**Sign**: a -> b -> b | a  
**See**: [and](#and)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 
| e | <code>\*</code> | 

**Example**  
```js
f.or(true)(false) // => true
f.or(10)(20) // => 20
f.or('aaa')(0) // => 'aaa'
```
  

[View source](../src/or.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="partial"></a>

## partial ⇒ <code>function</code>
Call a part of function and return a new function

Similar to `f.curry`

**Category**: [Function](#function)  
**Sign**: ((a, b, ..., z) -> res) -> (a, b, ..., n) -> (o, p, ..., z) -> res  
**See**: [curry](#curry), [partialRight](#partialRight)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| ...args | <code>\*</code> | 

**Example**  
```js
let sum = (a, b, c) => a + b + c
let sumAB = f.partial(sum)('a', 'b')

sumAB('c') // => 'abc'
sumAB('d') // => 'abd'
```
  

[View source](../src/partial.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="partialRight"></a>

## partialRight ⇒ <code>function</code>
Call a part of function and return a new function like `f.partial`

But arguments start at right (arguments order still left-to-right)

**Category**: [Function](#function)  
**Sign**: ((a, b, ..., z) -> res) -> (o, p, ..., z) -> (a, b, ..., n) -> res  
**See**: [partial](#partial)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| ...args | <code>\*</code> | 

**Example**  
```js
let sum = (a, b, c) => a + b + c
let sumBeforeAB = f.partial(sum)('a', 'b')

sumAB('c') // => 'cab'
sumAB('d') // => 'dab'
```
  

[View source](../src/partialRight.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="path"></a>

## path ⇒ <code>\*</code>
Read the path of the object

If key not exist will return `undefined`

If not pass path will return object self

**Category**: [Object](#object), curried  
**Sign**: Array -> Object -> x  
**See**: [pathOr](#pathOr), [pathEq](#pathEq)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 
| obj | <code>Object</code> | 

**Example**  
```js
let readPath = f.path(['a', 'a'])
let obj1 = { a: { a: 123 } }
let obj2 = { a: { b: 123 } }

readPath(obj1) // => 123
readPath(obj2) // => undefined
```
  

[View source](../src/path.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="pathEq"></a>

## pathEq ⇒ <code>Boolean</code>
Read the path of the object

Check the returns is equal with the supplied value

**Category**: [Object](#object), curried  
**Sign**: (Array, x) -> Object -> Boolean  
**See**: [path](#path), [pathOr](#pathOr)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 
| val | <code>\*</code> | 
| obj | <code>Object</code> | 

**Example**  
```js
let checkPath = f.pathEq(['a', 'a'], 123)

checkPath({ b: 999 }) // => false
checkPath({ a: { a: 123 } }) // => true
```
  

[View source](../src/pathEq.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="pathOr"></a>

## pathOr ⇒ <code>\*</code>
Read the path of object by `f.path`

If not true return default value

**Category**: [Object](#object), curried  
**Sign**: (Array, a) -> Object -> x | a  
**See**: [path](#path), [pathEq](#pathEq)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 
| def | <code>\*</code> | 
| obj | <code>Object</code> | 

**Example**  
```js
let readPathOr = f.pathOr(['a', 'a'], 'no!')

readPathOr({ a: 123 }) // => no!
readPathOr({ a: { a: 'yes' } }) // => yes!
```
  

[View source](../src/pathOr.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="pick"></a>

## pick ⇒ <code>Object</code>
Pick some keys of object

Return a new object with the corresponding key and value 

**NOTE:** Shallow copy

**Category**: [Object](#object), curried  
**Sign**: [k] -> { k: v } -> { k: v }  
**See**: [pickBy](#pickBy), [omit](#omit)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| keys | <code>Array</code> | 
| obj | <code>Object</code> | 

**Example**  
```js
let pickAB = f.pick(['a', 'b'])
let obj = { a: 123, b: 234, c: 345 }

pickAB(obj) // => { a: 123, b: 234 }
```
  

[View source](../src/pick.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="pickBy"></a>

## pickBy ⇒ <code>Object</code>
Pass every `value` and `key` of the object to the supplied function,  
if return true, select corresponding key and value.  

Return a new object.

**NOTE:** Shallow copy  
**NOTE:** Not support prototype chain

**Category**: [Object](#object), curried  
**Sign**: ((v, k) -> Boolean) -> { k: v } -> { k: v }  
**See**: [pick](#pick)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| obj | <code>Object</code> | 

**Example**  
```js
let obj = { a: 1, b: 2, c: 3}
let pickBy = f.pickBy(f.gte(2))

pickBy(obj) // => { b: 2, c: 3 }
```
  

[View source](../src/pickBy.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="pipe"></a>

## pipe ⇒ <code>function</code>
Generate a left-to-right function pipe

One's returns considered as next's parameter

Except the first function, others should be unary

**Category**: [Function](#function)  
**Sign**: (...a -> b, b -> c, ..., y -> z) -> (...a -> z)  
**See**: [pipeAsync](#pipeAsync)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| ...fns | <code>function</code> | 

**Example**  
```js
// add 1 then multiply 2
let calc = f.pipe(f.add(1), f.multiply(2))

calc(1) // => 4
calc(3) // => 8
```
  

[View source](../src/pipe.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="pipeAsync"></a>

## pipeAsync ⇒ <code>function</code>
Generate a left-to-right async function pipe

Every functions need return a `Promise`

**NOTE:** Every function should be unary

**Category**: [Function](#function)  
**Sign**: (a -> PromiseA, ..., z -> PromiseZ) -> (a -> PromiseZ)  
**See**: [pipe](#pipe)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| ...fns | <code>function</code> | 
| arg | <code>\*</code> | 

**Example**  
```js
let addA = arg => new Promise(res => setTimeout(res, 100, arg + 'a'))
let addB = arg => new Promise(res => setTimeout(res, 100, arg + 'b'))
let addC = arg => new Promise(res => setTimeout(res, 100, arg + 'c'))
let addABC = f.pipeAsync(addA, addB, addC)

addABC('').then(console.log) // => after 300 ms logs: 'abc'
```
  

[View source](../src/pipeAsync.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="prop"></a>

## prop ⇒ <code>\*</code>
Read the key of the object

Like `obj[key]`

**Category**: [Object](#object), curried  
**Sign**: x -> Object -> x  
**See**: [props](#props), [propOr](#propOr), [propEq](#propEq)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| key | <code>\*</code> | 
| obj | <code>Object</code> | 

**Example**  
```js
let a = { a: 1, b: 0 }
let b = { a: 2 }
let getA = f.prop('a')
let getB = f.prop('b')

getA(a) // => 1
getA(b) // => 2
getB(b) // => undefined
```
  

[View source](../src/prop.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="propEq"></a>

## propEq ⇒ <code>\*</code>
Read the key of object

Check the corresponding value is equal with supplied val

Use `===`

**Category**: [Object](#object), curried  
**Sign**: (a, b) -> Object -> Boolean  
**See**: [prop](#prop), [propOr](#propOr)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| key | <code>\*</code> | 
| val | <code>\*</code> | 
| obj | <code>Object</code> | 

**Example**  
```js
let checkEq = f.propEq('a', 123)
let obj1 = { a: 123 }
let obj2 = { a: 234 }

checkEq(obj1) // => true
checkEq(obj2) // => false
```
  

[View source](../src/propEq.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="propOr"></a>

## propOr ⇒ <code>\*</code>
Supply the key and default value

Read the key of the object

If true return the corresponding value

Else return the default value

Like `obj[key] || def`

**Category**: [Object](#object), curried  
**Sign**: (a, b) -> Object -> a | b  
**See**: [prop](#prop), [propEq](#propEq)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| key | <code>\*</code> | 
| def | <code>\*</code> | 
| obj | <code>Object</code> | 

**Example**  
```js
let readA = f.propOr('a', false)

readA({ a: 123 }) // => 123
readA({}) // => false
```
  

[View source](../src/propOr.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="props"></a>

## props ⇒ <code>Array</code>
Select the values by the supplied keys 

Return an array

**Category**: [Object](#object), curried  
**Sign**: Array -> Object -> Array  
**See**: [prop](#prop)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| keys | <code>Array</code> | 
| obj | <code>Object</code> | 

**Example**  
```js
let obj = { a: 1, b: 2, c: 3 }

f.props(['a', 'b', 'c', 'd'])(obj)
// => [1, 2, 3, undefined]
```
  

[View source](../src/props.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="random"></a>

## random ⇒ <code>Number</code>
Get a random integer between the min and the max number supplied

Contains the min and the max

**NOTE:** Support Integer Only

**Category**: [Tools](#tools), curried  
**Sign**: Number -> Number -> Number  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| min | <code>Number</code> | 
| max | <code>Number</code> | 

**Example**  
```js
f.random(1, 10) // => 1
f.random(1, 10) // => 9
f.random(1, 10) // => 8
f.random(1, 10) // => 10
```
  

[View source](../src/random.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="reduce"></a>

## reduce ⇒ <code>\*</code>
Just Like `Array.prototype.reduce`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

**Category**: [Native](#native)  
**Sign**: (x -> a) -> Array -> a  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| [def] | <code>\*</code> | 
| data | <code>Array</code> | 

**Example**  
```js
let sum = f.reduce((acc, cur) => acc += cur)

sum([1, 2, 3]) // => 6
```
  

[View source](../src/reduce.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="reject"></a>

## reject ⇒ <code>Array</code>
Opposite to `Array.prototype.filter`

Only support first parameter

**Category**: [Array](#array), curried  
**Sign**: (a -> Boolean) -> [a] -> [a]  
**See**: [filter](#filter)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| arr | <code>Array</code> | 

**Example**  
```js
let notGreaterThan3 = f.reject(f.gt(3))
let arr = [1, 2, 3, 4, 5]

notGreaterThan3(arr) // => [1, 2, 3]
```
  

[View source](../src/reject.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="replace"></a>

## replace ⇒ <code>String</code>
Just like `String​.prototype​.replace`

Will not change supplied string

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

**Category**: [Native](#native)  
**Sing**: (String | RegExp, String | Function) -> String ->String  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| arg1 | <code>String</code> \| <code>RegExp</code> | 
| arg2 | <code>String</code> \| <code>function</code> | 
| str | <code>String</code> | 

**Example**  
```js
let replace = f.replace(/yes/, 'no')

replace('yes yes i will yes')
// => no no i will no
```
  

[View source](../src/replace.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="reverse"></a>

## reverse ⇒ <code>Array</code>
Return a new array with the reverse of the array supplied

And this not like `Array.prototype.reverse`, will not change the origin array

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

**NOTE:** Shallow copy

**Category**: [Native](#native)  
**Sign**: [a, b, ..., z] -> [z, ..., b, a]  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| arr | <code>\*</code> | 

**Example**  
```js
let arr = [1, 2, 3]

f.reverse(arr) // [3, 2, 1]
```
  

[View source](../src/reverse.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="shuffle"></a>

## shuffle ⇒ <code>Array</code>
Shuffle the array and return a new array

Shallow Copy

**Category**: [Array](#array)  
**Sign**: [a] -> [a]  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

**Example**  
```js
let arr = [1, 2, 3]

f.shuffle(arr) // => [2, 3, 1]
```
  

[View source](../src/shuffle.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="sleep"></a>

## sleep ⇒ <code>Promise</code>
Wait for some time and return a `Promise` instance

**Category**: [Tools](#tools), curried  
**Sign**: Number -> x -> Promise  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| ms | <code>Number</code> | 
| arg | <code>\*</code> | 

**Example**  
```js
let fn = res => 'result is' + res
let sleepOneSec = sleep(1000)

sleepOneSec('hello').then(fn) 
// => after 1 sceond: 'result is hello'
```
  

[View source](../src/sleep.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="slice"></a>

## slice ⇒ <code>Array</code> \| <code>String</code>
Like `slice` method of `Array.prototype` and `String.prototype`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

**Category**: [Native](#native)  
**Sign**: (Number, Number) -> a -> a  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| [begin] | <code>Number</code> | 
| [end] | <code>Number</code> | 
| data | <code>Array</code> \| <code>String</code> | 

**Example**  
```js
let slice2 = f.slice(2, 4)

slice2([1, 2, 3, 4, 5]) // => [3, 4]
slice2('abced') // => 'ce'
```
  

[View source](../src/slice.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="some"></a>

## some ⇒ <code>Boolean</code>
Just like `Array.prototype.some`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

**Category**: [Native](#native)  
**Sign**: (a -> Boolean) -> [a] -> Boolean  
**See**: [every](#every), [none](#none)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| [thisArg] | <code>Array</code> | 
| data | <code>Array</code> | 

**Example**  
```js
let someGreaterThan3 = f.some(f.gt(3))

someGreaterThan3([2, 3, 4]) // => true
someGreaterThan3([1, 2, 3]) // => false
```
  

[View source](../src/some.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="somePass"></a>

## somePass ⇒ <code>Boolean</code>
Check the supplied parameters is satisfied of some function

From left-to-right

Default `false`

**Category**: [Tools](#tools)  
**Sign**: (...a -> b, ...a -> c, ...) -> (...a -> Boolean)  
**See**: [everyPass](#everyPass), [either](#either)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| ...fns | <code>function</code> | 
| ...args | <code>\*</code> | 

**Example**  
```js
let somePass = f.somePass(f.gt(5), f.gt(10), f.gt(15))

somePass(12) // => true
somePass(3) // => false
```
  

[View source](../src/somePass.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="sort"></a>

## sort ⇒ <code>Array</code>
Like `Array.prototype.sort`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

But it will not change the supplied array

**NOTE:** Shallow copy

**Category**: [Native](#native)  
**Sign**: ((a, a) -> Number) -> [a] -> [a]  
**See**: [sortWith](#sortWith)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| [fn] | <code>function</code> | 
| arr | <code>Array</code> | 

**Example**  
```js
let sortAsc = f.sort(f.asc)

sortAsc([10, 9, 1, 3, 2]) // => [1, 2, 3, 9, 10]
```
  

[View source](../src/sort.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="sortWith"></a>

## sortWith ⇒ <code>Array</code>
Sort the array with some comparator functions

When one function return 0, call the next one

And return a new array

Use `Array.prototype.sort`

**NOTE:** Shallow copy

**Category**: [Array](#array)  
**Sign**: ((a, a) -> Number, ...) -> [a] -> [a]  
**See**: [sort](#sort)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| ...fns | <code>function</code> | 
| arr | <code>Array</code> | 

**Example**  
```js
// sort by age asc, then sort by name asc
let sortMethod = f.sortWith(
  f.ascend(f.prop('age')), 
  f.ascend(f.prop('name'))
)

let users = [
  { name: 'Elika', age: 10 },
  { name: 'Alice', age: 10 },
  { name: 'Mike', age: 5 },
]

sortMethod(users)
// =>
// [
//   { name: 'Mike', age: 5 },
//   { name: 'Alice', age: 10 },
//   { name: 'Elika', age: 10 },
// ]
```
  

[View source](../src/sortWith.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="splice"></a>

## splice ⇒ <code>Array</code>
Similar to `Array.prototype.splice`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

But this function will not change the supplied array

Return changed array

**NOTE:** Shallow Copy

**Category**: [Native](#native)  
**Sign**: (Number, Number, *, ...) -> Array -> Array  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| arg1 | <code>Number</code> | 
| [arg2] | <code>Number</code> | 
| [...arg3] | <code>\*</code> | 
| arr | <code>Array</code> | 

**Example**  
```js
let replaceTwo = f.splice(1, 2, 'two', 'two')
let arr = ['one', 'two', 'three', 'four']

replaceTwo(arr) // => ['one', 'two', 'two', 'four']
```
  

[View source](../src/splice.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="split"></a>

## split ⇒ <code>Array</code>
Just like `String.prototype.split`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

**Category**: [Native](#native)  
**Sign**: (String | RegExp) -> String -> Array  
**See**: [join](#join)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| [separator] | <code>String</code> \| <code>RegExp</code> | 
| [limit] | <code>Number</code> | 
| str | <code>String</code> | 

**Example**  
```js
let str = 'i have a plan'
let splitWithBlank = f.split(' ')

splitWithBlank(str) // => ['i', 'have', 'a', 'plan']
```
  

[View source](../src/split.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="startsWith"></a>

## startsWith ⇒ <code>Boolean</code>
Just Like `String.prototype.startsWith`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

**Category**: [Native](#native)  
**Sign**: (String) -> String -> Boolean  
**See**: [endsWith](#endsWith)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 
| [length] | <code>Number</code> | 
| data | <code>String</code> | 

**Example**  
```js
let str = 'i have a plan'

f.startsWith('i have')(str) // => true
```
  

[View source](../src/startsWith.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="subtract"></a>

## subtract ⇒ <code>Number</code>
Like `-`

The second parameter subtract the first

**Category**: [Logic](#logic), curried  
**Sign**: Number -> Number -> Number  
**See**: [add](#add)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| x | <code>Number</code> | 
| e | <code>Number</code> | 

**Example**  
```js
f.subtract(3)(1) // => -2
f.subtract(3)('a') // => NaN
```
  

[View source](../src/subtract.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="sum"></a>

## sum ⇒ <code>\*</code>
Sum the array

Use `Array.prototype.reduce`

**Category**: [Array](#array)  
**Sign**: [a] -> a  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

**Example**  
```js
f.sum([1, 2, 3, 4]) // => 10
f.sum(['a', 'b', 'c', 'd']) // => abcd
```
  

[View source](../src/sum.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="tap"></a>

## tap ⇒ <code>\*</code>
Execute the given function with the supplied params, then return the params

Notice that this perhaps change the params passed

This function usual use in case like this 

`function foo () { let a = {}; a.a = 123; return a }`

To

`const foo = () => f.tap(obj => obj.a = 123, {})`

**NOTE:** Not Pure

**Category**: [Tools](#tools), curried  
**Sign**: (a -> x) -> a -> a  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| e | <code>\*</code> | 

**Example**  
```js
let fn = obj => obj.a = 123

f.tap(fn)({}) // => { a: 123 }
```
  

[View source](../src/tap.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="test"></a>

## test ⇒ <code>Boolean</code>
Just Like `RegExp.prototype​.test`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

But this is a little different,
it is curried and `RegExp` is the first parameter

**Category**: [Native](#native), curried  
**Sign**: RegExp -> String -> Boolean  
**See**: [match](#match)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| reg | <code>RegExp</code> | 
| str | <code>String</code> | 

**Example**  
```js
let test = f.test(/hello/)

test('hello world') // => true
test('goodbye world') // => false
```
  

[View source](../src/test.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="then"></a>

## then ⇒ <code>Promise</code>
Just like `Promise.prototype.then`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

**Category**: [Native](#native)  
**Sign**: (Function, Function?) -> Promise -> Promise  
**See**: [catch](#catch)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn1 | <code>function</code> | 
| [fn2] | <code>function</code> | 
| data | <code>Promise</code> | 

**Example**  
```js
let fetchData = () => Promise.resolve({ name: 'Eric' })
let getName = f.then(f.prop('name'))

getName(fetchData()).then(console.log) // => logs: Eric
```
  

[View source](../src/then.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="throttle"></a>

## throttle ⇒ <code>function</code>
Pass the `ms` and `fn` to create a new function

When invoke the new function, 
`fn` will be invoked,
and at most invoke once in `ms` milliseconds

**Category**: [Function](#function), curried  
**Sign**: Number -> (...x -> a) -> (...x -> a)  
**See**: [debounce](#debounce)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| ms | <code>Number</code> | 
| fn | <code>function</code> | 

**Example**  
```js
let num = 0
let fn = f.throttle(100)(() => num += 1) 

fn()
fn()
fn()
setTimeout(fn, 120)

console.log(num) // logs 1
console.log(num) // logs 1
console.log(num) // logs 1
setTimeout(() => console.log(num), 150) // logs 2 after 150 ms
```
  

[View source](../src/throttle.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="thunkify"></a>

## thunkify ⇒ <code>function</code>
Pass the arguments and return a new equivalent function
which will delay to invoked until it needs

It is the special case of `f.partial`

**Category**: [Function](#function)  
**Sign**: ((a, b, ..., z) -> res) -> (a, b, ..., z) -> () -> res  
**See**: [partial](#partial), [partialRight](#partialRight)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| args | <code>\*</code> | 

**Example**  
```js
let sum = (a, b, c) => a + b + c
let waitSum = f.thunkify(sum)('a', 'b', 'c')

waitSum() // => 'abc'
```
  

[View source](../src/thunkify.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="times"></a>

## times ⇒ <code>function</code>
Call the supplied function for `n` times
and push the returns to an array

**Category**: [Tools](#tools), curried  
**Sign**: Number -> (a -> b) -> (a -> b)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| n | <code>Number</code> | 
| fn | <code>function</code> | 

**Example**  
```js
let id3 = f.times(3, f.identity)

id3(1) // => [1, 1, 1]
```
  

[View source](../src/times.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="toArray"></a>

## toArray ⇒ <code>Array</code>
If the parameter is array return a new shallow copy array

If not, return a array with it

**Category**: [Tools](#tools)  
**Sign**: a -> [a]  
**Sign**: [a] -> [a]  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| data | <code>\*</code> | 

**Example**  
```js
f.toArray('hello') // => ['hello']
f.toArray(['hello']) // => ['hello']
```
  

[View source](../src/toArray.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="toLower"></a>

## toLower ⇒ <code>String</code>
Return a new string

Just like `String.prototype.toLowerCase`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

**Category**: [Native](#native)  
**Sign**: String -> String  
**See**: [toUpper](#toUpper)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

**Example**  
```js
let str = 'ABC'

f.toLower(str) // => 'abc'
```
  

[View source](../src/toLower.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="toUpper"></a>

## toUpper ⇒ <code>String</code>
Return a new String

Just like `String.prototype.toUpperCase`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

**Category**: [Native](#native)  
**Sign**: String -> String  
**See**: [toLower](#toLower)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

**Example**  
```js
let str = 'abc'

f.toUpper(str) // => 'ABC'
```
  

[View source](../src/toUpper.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="trace"></a>

## trace ⇒ <code>\*</code>
This is a function for debug

Use with function like `f.pipe`

To test what parameters passed in

**Category**: [Tools](#tools), curried  
**Sign**: String -> a -> a  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| tag | <code>String</code> | 
| x | <code>\*</code> | 

**Example**  
```js
let add3 = f.pipe(
  f.add(1), 
  f.trace('what i am?')
  f.add(1), 
  f.trace('what i am?')
  f.add(1), 
)

add3(3) 
// logs: what i am?, 4
// logs: what i am?, 5
// => 6
```
  

[View source](../src/trace.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="trim"></a>

## trim ⇒ <code>String</code>
Just like `String.prototype.trim`

Return a new string

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

**Category**: [Native](#native)  
**Sign**: String -> String  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

**Example**  
```js
let str = ' i have a plan '

f.trim(str) // => 'i have a plan'
```
  

[View source](../src/trim.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="tryCatch"></a>

## tryCatch ⇒ <code>function</code>
Call the first function 

If throw an error, call the next

**Category**: [Tools](#tools), curried  
**Sign**: (...a -> b, ...a -> c) -> (...a -> b | c)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| tryer | <code>function</code> | 
| catcher | <code>function</code> | 

**Example**  
```js
let parse = f.tryCatch(JSON.parse, f.always({}))

parse(JSON.stringify({ a: 1 })) // => { a: 1 }
parse({ a: 1 }) // => {}
```
  

[View source](../src/tryCatch.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="type"></a>

## type ⇒ <code>String</code>
Check the tpye of element

Use `Object.prototype.toString`

**Category**: [Tools](#tools)  
**Sign**: x -> String  
**See**: [is](#is)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| e | <code>\*</code> | 

**Example**  
```js
f.type([]) // => Array
f.type({}) // => Object
f.type('') // => String
```
  

[View source](../src/type.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="unary"></a>

## unary ⇒ <code>function</code>
Pass the first parameters to supplied function and ignore others

**Category**: [Function](#function)  
**Sign**: ((a, b, ..., z) -> result) -> (a -> result)  
**See**: [binary](#binary), [uAry](#uAry)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

**Example**  
```js
let arr = [1, 2, 3]

arr.map(parseInt) // => [1, NaN, NaN]
arr.map(f.unary(parseInt)) // => [1, 2, 3]
```
  

[View source](../src/unary.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="uncurry"></a>

## uncurry ⇒ <code>function</code>
Change a curried function to an uncurry equivalent function

**Category**: [Function](#function)  
**Sign**: (a -> b -> ... -> z -> result) -> (a, b, ..., z) -> result  
**See**: [uncurryN](#uncurryN), [curry](#curry)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

**Example**  
```js
let add = a => b => c => a + b + c
let fn = f.uncurry(add)

fn('a', 'b', 'c') // => 'abc'
```
  

[View source](../src/uncurry.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="uncurryN"></a>

## uncurryN ⇒ <code>function</code>
Change a curried function to an uncurry equivalent function
with `n` arugments

**Category**: [Function](#function), curried  
**Sign**: Number -> (a -> b -> ... -> n -> result) -> (a, b, ..., n) -> result  
**See**: [uncurry](#uncurry), [curry](#curry)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| n | <code>Number</code> | 
| fn | <code>function</code> | 

**Example**  
```js
let add = a => b => c => a + b + c
let fn = f.uncurryN(2)(add)

fn('a', 'b')('c') // => 'abc'
```
  

[View source](../src/uncurryN.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="union"></a>

## union ⇒ <code>Array</code>
Return a new uniq array

Select unique elements either exist in one array or another

Order from second to first

**Category**: [Array](#array), curried  
**Sign**: Array -> Array -> Array  
**See**: [difference](#difference), [intersection](#intersection), [uniq](#uniq)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| arrx | <code>Array</code> | 
| arr | <code>Array</code> | 

**Example**  
```js
let arr1 = [1, 2, 3]
let arr2 = [2, 2, 3, 4]

f.union(arr1)(arr2) // => [2, 3, 4, 1]
```
  

[View source](../src/union.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="uniq"></a>

## uniq ⇒ <code>Array</code>
Return a new array

Select unique elements in the array with `Set`

**Category**: [Array](#array)  
**Sign**: Array -> Array  
**See**: [difference](#difference), [intersection](#intersection), [union](#union)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

**Example**  
```js
let arr = [1, 2, 2, NaN, NaN]

f.uniq(arr) // => [1, 2, NaN]
```
  

[View source](../src/uniq.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="unless"></a>

## unless ⇒ <code>\*</code>
Pass parameter to the first supplied function,
if not true invoke the second one,
else return self

**Category**: [Tools](#tools), curried  
**Sign**: (a -> b, a -> c, a) -> a | c  
**See**: [when](#when), [ifElse](#ifElse), [cond](#cond)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| tryer | <code>function</code> | 
| handler | <code>function</code> | 
| x | <code>\*</code> | 

**Example**  
```js
let cannotBelow3 = f.unless(f.gt(3), f.always('so small'))

cannotBelow3(5) // => 5
cannotBelow3(1) // => 'so small'
```
  

[View source](../src/unless.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="values"></a>

## values ⇒ <code>Array</code>
Equal with `Object.values`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

**Category**: [Native](#native)  
**Sign**: Object -> Array  
**See**: [keys](#keys)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> | 

**Example**  
```js
let obj = { a: 1, b: 2, c: 3 }

f.values(obj) // => [1, 2, 3]
```
  

[View source](../src/values.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

<a name="when"></a>

## when ⇒ <code>\*</code>
Pass parameter to the first supplied function,
if true invoke the second one,
else return self

**Category**: [Tools](#tools), curried  
**Sign**: (a -> b, a -> c, a) -> a | c  
**See**: [unless](#unless), [ifElse](#ifElse), [cond](#cond)  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| tryer | <code>function</code> | 
| handler | <code>function</code> | 
| x | <code>\*</code> | 

**Example**  
```js
let cannotOver3 = f.when(f.gt(3), f.always('so big'))

cannotOver3(5) // => 'so big'
cannotOver3(1) // => 1
```
  

[View source](../src/when.js)&nbsp;&nbsp;&nbsp;&nbsp;[Back to top](#category)  

  

