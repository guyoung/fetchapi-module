import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import pkg from './package.json'  assert { type: "json" };

export default {
  input: 'index.js',
  output: {
    name: 'fetchapi-module',
    file: pkg.browser,
    format: 'umd'
  },
  plugins: [commonjs(), json()]
};