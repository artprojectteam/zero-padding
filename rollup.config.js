import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import saveLicense from 'uglify-save-license'
import pkg from './package.json'

const is_production = process.env.NODE_ENV === 'production'
const dist = is_production ? pkg.uglify : pkg.main

let plugins = [
  babel({
    runtimeHelpers: true,
    exclude: 'node_modules/**',
  }),
]

if (is_production) {
  plugins.push(uglify({
    output: {
      comments: saveLicense,
    },
  }))
}

// 日付関係
const start_year = 2017
const now_year = new Date().getFullYear()
const add_year = now_year > start_year ? ` - ${now_year}` : null

export default {
  input: 'src/index.js',
  output: [
    {
      file: dist,
      format: 'umd',
      indent: true,
    }, {
      file: 'demo/zero-padding.js',
      format: 'umd',
      indent: true,
    },
  ],
  name: 'ZeroPadding',
  strict: true,
  sourceMap: false,
  banner: `/*!
${pkg.title} v${pkg.version}
${pkg.description}
Copyright (c) ${start_year + add_year} ${pkg.author}
License: ${pkg.license}

${pkg.homepage}
*/`,
  watch: {
    includes: 'src/*',
  },
  plugins: plugins,
}