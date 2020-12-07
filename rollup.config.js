import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import svelteReadme from "svelte-readme";
import fs from "fs";
import pkg from "./package.json";

const DEV = process.env.ROLLUP_WATCH;
const BUNDLE = process.env.BUNDLE === "true";

export default () => {
  if (!BUNDLE) {
    return svelteReadme({
      svelte: { dev: DEV, immutable: true },
      minify: !DEV,
      prefixUrl: `${pkg.homepage}/tree/master/`,
      style: `
        .markdown-body .code-fence ul, .markdown-body .code-fence ol {
          padding-left: 0;
        }
        
        ${fs.readFileSync(
          "node_modules/@primer/css/dist/primer.css",
          "utf-8"
        )}`,
    });
  }

  return ["es", "umd"].map((format) => {
    const UMD = format === "umd";

    return {
      input: pkg.svelte,
      output: {
        format,
        file: UMD ? pkg.main : pkg.module,
        name: UMD ? pkg.name : undefined,
        exports: "named",
      },
      plugins: [svelte(), resolve()],
    };
  });
};
