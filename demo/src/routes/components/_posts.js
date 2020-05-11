// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.
import marked from "marked";
import fs from "fs";
import path from "path";
import { highlight, languages } from "prismjs";
import "prism-svelte";

const file = fs.readFileSync(
  path.resolve(process.cwd(), "../docs/Truncate.md"),
  "utf8"
);

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

const posts = [
  {
    title: "Truncate",
    slug: "Truncate",
    html: marked(file),
  },
];

posts.forEach((post) => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
