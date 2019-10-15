const path = require('path')

const config = {
  development: {
    mode: 'development',
    filename: 'shadow-fns.js',
  },
  production: {
    mode: 'production',
    filename: 'shadow-fns.min.js',
  }
}[process.env.MODE]

if (!config) {
  throw '\n\n=====CONFIG NOT EXIST=====\n\n'
}

module.exports = {
  mode: config.mode,
  entry: './src/index.js',
  output: {
    library: 'f',
    libraryTarget: 'umd',
    globalObject: 'this',
    filename: config.filename,
    path: path.resolve(__dirname, 'dist')
  }
}
