# Changelog

## v1.0.0 (20200916)

Change some documentation.

## v0.1.8 (20200525)

Add 

- [deepCompact](./src/deepCompact.js) This method is surely used commonly.

## v0.1.7 (20200122)

Add

- [zip](./src/zip.js)

And improve some API code example and internal implementation.

## v0.1.6 (20200109)

- Change pack tool from `webpack` to `rollup`,
and that make umd version became more tiny! 

> Half of the original one.

- More friendly for `Tree-Shaking`, you can now import required functions without any redundant code.

## v0.1.5 (20191218)

Remove

- `catch`: This function's name is unfriendly and is actually unnecessary in Promise chain.

Add

- Types declare file, hmm... although all of them were `any` - [Detail](./types/index.d.ts)

## v0.1.4 (20191025)

Add 

- [call](./src/call.js)
- [move](./src/move.js)
- [toPairs](./src/toPairs.js)
- [fromPairs](./src/fromPairs.js)
- [VERSION](./src/VERSION.js)

Change

- [toArray](./src/toArray.js) 
  - `Before`: If supplied parameter is array, return array's shallow copy.
  - `After`: If supplied parameter is array, return self.

## v0.1.0 ~ v0.1.3 (20191016)

Just change some docs.