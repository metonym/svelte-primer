<script>
  export let href = "#";
  export let current = false;
</script>

<a
  {...$$restProps}
  aria-current="{current ? 'page' : undefined}"
  class:filter-item="{true}"
  href="{href}"
  on:click
>
  <slot />
</a>
