<script>
  export let href = "javascript:void(0);";
  export let current = false;
</script>

<a
  {...$$restProps}
  class:filter-item={true}
  aria-current={current ? 'page' : undefined}
  {href}>
  <slot />
</a>
