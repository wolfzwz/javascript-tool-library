
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from "rollup-plugin-terser";
// 不支持es6
// import {uglify} from 'rollup-plugin-uglify';

export default [{
    input: 'index.ts',
    output: [{
        file: 'dist/javascript-tool-library.js',
        /* 
          amd, cjs, esm, iife, umd
        */
        format: 'umd',
        name:'jstool'
    },{
        file: `dist/javascript-tool-library.iife.js`,
        format: 'iife',
        name: 'jstool'
      },
      {
        file: `dist/javascript-tool-library.cjs.js`,
        format: 'cjs',
        name: 'jstool'
      }],
    plugins: [
        resolve(),
        eslint(),
        typescript(),
        babel({
            exclude: 'node_modules/**'
        }),
        // uglify(),
        terser()
    ]
}]