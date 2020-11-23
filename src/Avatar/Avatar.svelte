<script>
  export let small = false;
  export let parent = false;
  export let child = false;
  export let width = 72;
  export let height = 72;

  import { getContext, onMount } from "svelte";

  const id = Math.random().toString(36);
  const ctx = getContext("AvatarStack");

  onMount(() => {
    if (ctx) ctx.add({ id });

    return () => {
      if (ctx) ctx.remove({ id });
    };
  });

  $: if (small) {
    width = 32;
    height = 32;
  }

  $: if (parent) {
    width = 48;
    height = 48;
  }

  $: if (child) {
    width = 20;
    height = 20;
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img
  {...$$restProps}
  class:avatar={true}
  class:avatar-small={small}
  class:avatar-child={child}
  {width}
  {height} />
