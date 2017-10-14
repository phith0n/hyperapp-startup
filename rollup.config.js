import buble from "rollup-plugin-buble"
import resolve from "rollup-plugin-node-resolve"
import uglify from "rollup-plugin-uglify"
import scss from 'rollup-plugin-scss'

export default {
  plugins: [
    buble({
      jsx: "h",
      include: "src/*.js"
    }),
    resolve({
      jsnext: true
    }),
    uglify(),
    scss({
      output: "docs/bundle.css"
    })
  ],
  output: {
    file: 'docs/bundle.js',
    format: 'iife'
  },
  input: 'src/index.js'
}