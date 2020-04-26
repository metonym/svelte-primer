<script>
  export let href = "#url";
  export let current = false;
</script>

<a
  {...$$restProps}
  class:menu-item={true}
  aria-current={current ? 'page' : undefined}
  {href}>
  <slot />
</a>
