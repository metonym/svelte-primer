<script>
  export let href = undefined;
</script>

{#if href}
  <a {...$$restProps} class:branch-name={true} {href}>
    <slot />
  </a>
{:else}
  <span {...$$restProps} class:branch-name={true}>
    <slot />
  </span>
{/if}
