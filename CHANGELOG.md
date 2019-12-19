# Changelog

## v0.1.5 (20191218)

Remove

- `catch`: This function's name is unfriendly and is actually unnecessary in Promise chain.

Add

- Types declare file, hmm... although all `any` - [Detail](./types/index.d.ts)

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