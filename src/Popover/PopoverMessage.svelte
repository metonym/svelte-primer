<script>
  export let large = false;

  import Box from "../Box/Box.svelte";
</script>

<Box
  {...$$restProps}
  class={[
    'Popover-message box-shadow-large',
    large && 'Popover-message--large',
    'text-left p-4 mt-2',
    $$restProps.class
  ]
    .filter(Boolean)
    .join(' ')}>
  <slot />
</Box>
