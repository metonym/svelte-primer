<script>
  export let selected = false;

  import Check from "svelte-octicons/lib/Check";
</script>

<button
  {...$$restProps}
  class:SelectMenu-item={true}
  role={selected ? 'menuitemcheckbox' : 'menuitem'}
  aria-checked={selected}
  on:click>
  {#if selected}
    <Check />
  {/if}
  <slot />
</button>
