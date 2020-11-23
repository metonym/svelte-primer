<script>
  /** @type {undefined | "dashed"} */
  export let border = undefined;
  export let condensed = false;
  export let spacious = false;

  /** @type {"blue" | "danger"} */
  export let theme = undefined;
</script>

<div
  {...$$restProps}
  class:Box="{true}"
  class:border-dashed="{border === 'dashed'}"
  class:Box--condensed="{condensed}"
  class:Box--spacious="{spacious}"
  class:Box--blue="{theme === 'blue'}"
  class:Box--danger="{theme === 'danger'}"
>
  <slot />
</div>
