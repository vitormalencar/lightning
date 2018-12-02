import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";

import pkg from "./package.json";

const globals = { "styled-components": "styled" };

const output = [
  { file: pkg.main, format: "cjs", sourcemap: true },
  { file: pkg.module, format: "es", sourcemap: true }
].map(r => ({ ...r, globals }));

export default {
  external: ["styled-components"],
  input: "src/index.js",
  output,
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: "node_modules/**",
      plugins: ["external-helpers"]
    }),
    resolve(),
    commonjs()
  ]
};
