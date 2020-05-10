<script>
  export let full = false;
</script>

<div {...$$restProps} class:Header-item={true} class:Header-item--full={full}>
  <slot />
</div>
