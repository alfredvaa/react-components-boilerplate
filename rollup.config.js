import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import json from 'rollup-plugin-json';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

const { readdirSync, statSync } = require('fs');
const { join } = require('path');

const dirs = p =>
  readdirSync(p).filter(f => statSync(join(p, f)).isDirectory());

const modules = dirs('src');

const config = moduleName => ({
  input: `src/${moduleName}/index.ts`,
  output: [
    {
      file: `src/${moduleName}/build/index.js`,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: `src/${moduleName}/build/index.es.js`,
      format: 'es',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    postcss({
      modules: true,
      modules: {},
      extract: false,
    }),
    typescript({
      tsconfigOverride: {
        include: [`${__dirname}/typings`, `${__dirname}/src/${moduleName}`],
      },
    }),
    external(),
    url(),
    json(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
  ],
});

export default modules.map(m => config(m));
