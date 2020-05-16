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
  import { LinkExternal } from "svelte-octicons";
  import { onMount, afterUpdate, getContext } from "svelte";

  const ctx = getContext("Root");

  onMount(() => {
    return () => {
      ctx.clear();
    };
  });

  afterUpdate(() => {
    ctx.set(post.title);
  });

  $: minHeight = {
    Alert: "20rem",
    BoxOverlay: "16rem",
    Toast: "21rem"
  };
</script>

<style>
  iframe {
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }

  .box-preview-link {
    white-space: nowrap;
    position: absolute;
    bottom: 0.5rem;
    right: 1.5rem;
  }

  :global(.box-preview) {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }

  :global(.box-source) {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }

  :global(pre[class*="language-"]) {
    border-radius: 0 !important;
    margin: 0 !important;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="markdown-body">
  <h1>{post.title}</h1>
  <Box.Box class="position-relative box-preview d-flex mt-4 border-bottom-0">
    <a
      class="box-preview-link"
      href="examples/{post.title}"
      target="_blank"
      rel="noopener noreferrer">
      View
      <LinkExternal />
    </a>
    <iframe
      title={post.title}
      style="min-height: {minHeight[post.title] || 0}"
      src="examples/{post.title}"
      class="border-0" />
  </Box.Box>
  <Box.Box class="box-source border-top-0 mb-2">
    <pre class="language-svelte">
      <code class="language-svelte">
        {@html post.source}
      </code>
    </pre>
  </Box.Box>
  {@html post.html}
</div>
