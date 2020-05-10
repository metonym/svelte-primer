<script>
  export let current = false;
  export let href = "#";
</script>

{#if current}
  <li
    {...$$restProps}
    class:breadcrumb-item={true}
    aria-current="page"
    on:click>
    <slot />
  </li>
{:else}
  <li class:breadcrumb-item={true}>
    <a {...$$restProps} {href} on:click>
      <slot />
    </a>
  </li>
{/if}
