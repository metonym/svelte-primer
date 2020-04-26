<script>
  export let small = false;
  export let alt = undefined;
  export let src = undefined;
</script>

<img
  {...$$restProps}
  class:avatar={true}
  class:avatar-small={small}
  {alt}
  {src} />
