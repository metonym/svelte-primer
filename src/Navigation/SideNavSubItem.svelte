<script>
  export let href = "javascript:void(0);";
  export let current = false;
</script>

<a
  {...$$restProps}
  class:SideNav-subItem={true}
  aria-current={current ? 'page' : undefined}
  {href}
  on:click>
  <slot />
</a>
