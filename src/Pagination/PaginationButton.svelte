<script>
  export let href = "#";
  export let disabled = false;
  export let kind = "next"; // 'next' | 'previous'

  $: capitalized = kind.slice(0, 1).toUpperCase() + kind.slice(1);
  $: props = {
    "aria-label": disabled ? undefined : `${capitalized} page`,
    class: `${kind}_page`,
    rel: kind,
    href
  };
</script>

{#if disabled}
  <span {...$$restProps} {...props} aria-disabled="true" on:click>
    <slot>{capitalized}</slot>
  </span>
{:else}
  <!-- svelte-ignore a11y-missing-attribute -->
  <a {...$$restProps} {...props} on:click>
    <slot>{capitalized}</slot>
  </a>
{/if}
