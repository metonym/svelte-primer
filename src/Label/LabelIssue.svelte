<script>
  let className = undefined;
  export { className as class };
  export let title = "Label: title";
  export let color = "blue"; // 'blue' | 'green' | 'red' | string:{color}
</script>

<span
  {...$$restProps}
  class={['IssueLabel', `bg-${color}`, 'text-white', className].join(' ')}
  {title}
  on:click>
  <slot>{title.split('Label: ').pop()}</slot>
</span>
