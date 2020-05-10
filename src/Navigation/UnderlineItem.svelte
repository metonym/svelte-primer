<script>
  export let href = "#";
  export let current = false;

  $: props = { "aria-current": current ? "page" : undefined };
</script>

<a {...$$restProps} {...props} class:UnderlineNav-item={true} {href} on:click>
  <slot />
</a>
