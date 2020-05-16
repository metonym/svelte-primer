import marked from "marked";
import fs from "fs";
import path from "path";
import { highlight, languages } from "prismjs";
import "prism-svelte";

const renderer = new marked.Renderer();

renderer.blockquote = (text) => {
  return text.replace(
    "..",
    "https://github.com/metonym/svelte-primer/tree/master"
  );
};

renderer.heading = (text, level) => {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");

  if (level === 1) {
    return "";
  }

  return `<h${level} id="${escapedText}">${text}</h${level}>`;
};

renderer.code = (code, language) => {
  const highlighted = highlight(code, languages.svelte, "svelte");
  return `<pre class="language-${language}"><code class="language-${language}">${highlighted}</code></pre>`;
};

marked.setOptions({ renderer });

const posts = fs
  .readdirSync(path.resolve(process.cwd(), "../docs"))
  .filter((fileName) => fileName !== "README.md")
  .map((fileName) => {
    const file = fs.readFileSync(
      path.resolve(process.cwd(), "../docs", fileName),
      "utf8"
    );

    const title = fileName.replace(".md", "");
    const sourceCode = fs.readFileSync(
      path.resolve(process.cwd(), "./src/routes/examples/", `${title}.svelte`),
      "utf8"
    );

    return {
      title,
      slug: title,
      html: marked(file),
      source: highlight(sourceCode, languages.svelte, "svelte"),
    };
  });

export default posts;
