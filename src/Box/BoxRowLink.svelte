<script>
  export let href = "javascript:void(0);";
</script>

<a {...$$restProps} class:Box-row-link={true} {href} on:click>
  <slot />
</a>
