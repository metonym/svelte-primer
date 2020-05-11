<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`components/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;

  import { Box } from "svelte-primer";
  import Truncate from "./_components/Truncate.svelte";
  import { onMount, getContext } from "svelte";

  const ctx = getContext("Root");

  onMount(() => {
    ctx.set(post.title);

    return () => {
      ctx.clear();
    };
  });

  const components = { Truncate };
</script>

<svelte:head>
  <title>{post.title}</title>
  <link
    rel="stylesheet"
    href="https://unpkg.com/prism-themes@1.4.0/themes/prism-duotone-sea.css" />
</svelte:head>

<div class="markdown-body">
  <h1>{post.title}</h1>
  <Box.Box class="p-3 mt-4 mb-2">
    <svelte:component this={components[post.title]} />
  </Box.Box>
  {@html post.html}
</div>
