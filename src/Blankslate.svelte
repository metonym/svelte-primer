<script>
  export let size = undefined; // 'narrow' | 'spacious'
  export let large = false;
  export let capped = false;
  export let bordered = false;

  import Box from "./Box/Box.svelte";
</script>

{#if bordered}
  <Box class={[capped && 'rounded-top-0'].filter(Boolean).join('')}>
    <div
      {...$$restProps}
      class:blankslate={true}
      class:blankslate-narrow={size === 'narrow'}
      class:blankslate-spacious={size === 'spacious'}
      class:blankslate-large={large}
      class:rounded-top-0={capped}>
      <slot />
    </div>
  </Box>
{:else}
  <div
    {...$$restProps}
    class:blankslate={true}
    class:blankslate-narrow={size === 'narrow'}
    class:blankslate-spacious={size === 'spacious'}
    class:blankslate-large={large}>
    <slot />
  </div>
{/if}
