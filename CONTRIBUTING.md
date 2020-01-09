# Contributing

Well, it's just the library for myself to use, not many rules.

## Beautiful

So, writing beautiful.

## Development Setup

You need [Node.js](http://nodejs.org/) and [yarn](https://yarnpkg.com/en/docs/install).

And run

```
yarn
```

## Project Structure

- `coverage/` coverage files.
- `dist/` umd version.
- `doc/` documentations.
- `lib/` after babel translated.
- `scripts/` used to build docs.
- `src/` source code.
- `test/` unit tests.

## Scripts

### yarn test

Run the unit tests.

### yarn cover

Run the unit tests and generate the coverage files and check the cover rate.

### yarn build

Build `babel-version` and `umd-version` and `API documentation`.

### ...

Others check the `package.json`.

## Dev Dependencies

Mainly

- [rollup](https://rollupjs.org/guide/en/)
- [mocha](https://mochajs.org)
- [babel](https://babeljs.io)
- [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown)
- [nyc](https://github.com/istanbuljs/nyc)