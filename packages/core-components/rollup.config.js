import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: ['src/index.ts'],
  external: [
    ...Object.keys(pkg.dependencies || {})
  ],
  output: {
    dir: './lib/',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [typescript()],
};

