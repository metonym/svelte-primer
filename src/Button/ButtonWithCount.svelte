<script>
  export let href = "#";
  export let count = 0;
  export let countHref = "#";

  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";

  const dispatch = createEventDispatcher();
</script>

<div {...$$restProps} class="clearfix">
  <Button variant="link" size="small" class="btn-with-count" {href} on:click>
    <slot />
  </Button>
  <a
    class="social-count"
    href={countHref}
    on:click={() => {
      dispatch('click:count');
    }}>
    {count}
  </a>
</div>
