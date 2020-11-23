<script>
  /** @type {"left" | "right"} */
  export let align = "left";

  import { setContext } from "svelte";

  setContext("Underline", {});
</script>

<nav
  {...$$restProps}
  class:UnderlineNav="{true}"
  class:UnderlineNav--right="{align === 'right'}"
>
  {#if align === 'right'}
    <slot name="actions" props="{{ class: 'UnderlineNav-actions' }}" />
  {/if}
  <div class="UnderlineNav-body" role="tablist">
    <slot />
  </div>
  {#if align === 'left'}
    <slot name="actions" props="{{ class: 'UnderlineNav-actions' }}" />
  {/if}
</nav>
