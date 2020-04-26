<script>
  export let href = "javascript:void(0);";
  export let count = 0;
  export let countHref = "javascript:void(0);";

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
