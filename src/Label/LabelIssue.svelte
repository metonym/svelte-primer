<script>
  export let title = "Label: title";

  /** @type {"blue" | "green" | "red" | string} */
  export let color = "blue";
</script>

<span
  {...$$restProps}
  class="{['IssueLabel', `bg-${color}`, 'text-white', $$restProps.class]
    .filter(Boolean)
    .join(' ')}"
  title="{title}"
  on:click
>
  <slot>{title.split('Label: ').pop()}</slot>
</span>
