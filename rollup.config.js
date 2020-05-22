import resolve from "rollup-plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";
import { main, module, name } from "./package.json";

export default ["es", "umd"].map((format) => {
  const UMD = format === "umd";

  return {
    input: "src",
    output: {
      format,
      file: UMD ? main : module,
      name: UMD ? name : undefined,
    },
    plugins: [svelte(), resolve(), UMD && terser()],
  };
});
