<script>
  // TODO: support different directions
  let className = undefined;
  export { className as class };
  export let open = false;
</script>

<div {...$$restProps} class={['Popover', className].filter(Boolean).join(' ')}>
  {#if open}
    <slot />
  {/if}
</div>
