<script>
  /** @type {string} */
  export let title = undefined;

  /** @type {"blue" | "green" | "gray" | "gray-darker" | "orange" | "yellow" | "red" | "purple" | "pink"} */
  export let color = "blue";
  export let outline = false;
</script>

<span
  {...$$restProps}
  class="{[
    'Label',
    outline && 'Label--outline',
    outline && color === 'green' && 'Label--outline-green',
    !outline && `bg-${color}`,
    color && `Label--${color}`,
    $$restProps.class,
  ]
    .filter(Boolean)
    .join(' ')}"
  title="{title}"
  on:click
>
  <slot />
</span>
