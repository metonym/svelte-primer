<script>
  export let href = "javascript:void(0);";
  export let current = false;
</script>

<a
  {...$$restProps}
  class:UnderlineNav-item={true}
  {href}
  aria-current={current ? 'page' : undefined}>
  <slot />
</a>
