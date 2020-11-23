<script>
  /** @type {"gray" | "gray-light"} */
  export let color = undefined;
</script>

<span
  {...$$restProps}
  class:Counter="{true}"
  class:Counter--gray="{color === 'gray'}"
  class:Counter--gray-light="{color === 'gray-light'}"
  on:click
>
  <slot />
</span>
