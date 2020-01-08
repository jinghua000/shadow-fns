import { terser } from 'rollup-plugin-terser'
import json from '@rollup/plugin-json'

const plugins = [
  terser({
    include: [/^.+\.min\.js$/], 
  }),
  json(),
]

const config = (function () {
  if (+process.env.IS_TESTING === 1) {
    return {
      input: 'demo/index.js',
      plugins,
      output: [
        {
          name: 'demo',
          file: 'demo/testing.umd.js',
          format: 'umd'
        }, 
      ],
    }
  }

  return {
    input: 'src/index.js',
    plugins,
    output: [
      {
        name: 'f',
        file: 'dist/shadow-fns.umd.js',
        format: 'umd'
      }, 
      {
        name: 'f',
        file: 'dist/shadow-fns.umd.min.js',
        format: 'umd'
      }
    ]
  }
})()

export default config