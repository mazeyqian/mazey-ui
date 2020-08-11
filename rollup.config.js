import babel from 'rollup-plugin-babel';

export default {
  input: 'src/js/deal/index.js',
  output: {
    file: 'lib/index.cjs.js',
    format: 'cjs'
  },
  plugins: [babel()]
};
