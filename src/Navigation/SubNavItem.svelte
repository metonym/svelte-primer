<script>
  export let href = "javascript:void(0);";
  export let current = false;

  $: props = { "aria-current": current ? "page" : undefined };
</script>

<a {...$$restProps} {...props} class:subnav-item={true} {href} on:click>
  <slot />
</a>
