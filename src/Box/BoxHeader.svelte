<script>
  export let theme = undefined; // 'blue'
</script>

<div
  {...$$restProps}
  class:Box-header="{true}"
  class:Box-header--blue="{theme === 'blue'}"
>
  <slot />
</div>
