<script>
  export let title = "Label: title";
  export let color = "blue"; // 'blue' | 'green' | 'red' | string:{color}
</script>

<span
  {...$$restProps}
  class={['IssueLabel', `bg-${color}`, 'text-white', $$restProps.class]
    .filter(Boolean)
    .join(' ')}
  {title}
  on:click>
  <slot>{title.split('Label: ').pop()}</slot>
</span>
