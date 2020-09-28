<script>
  export let bordered = false;
</script>

<nav {...$$restProps} class:SideNav="{true}" class:border="{bordered}">
  <slot />
</nav>
