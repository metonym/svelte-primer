<script>
  /** @type {undefined | "blue"} */
  export let theme = undefined;
</script>

<div
  {...$$restProps}
  class:Box-header="{true}"
  class:Box-header--blue="{theme === 'blue'}"
>
  <slot />
</div>
