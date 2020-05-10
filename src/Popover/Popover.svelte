<script>
  // TODO: support different directions
  export let open = false;
</script>

<div
  {...$$restProps}
  class={['Popover', $$restProps.class].filter(Boolean).join(' ')}>
  {#if open}
    <slot />
  {/if}
</div>
