<script>
  export let href = undefined;
</script>

{#if href}
  <a {...$$restProps} class:branch-name={true} {href} on:click>
    <slot />
  </a>
{:else}
  <span {...$$restProps} class:branch-name={true} on:click>
    <slot />
  </span>
{/if}
