<script>
  let className;
  export { className as class };
  export let theme = undefined; // 'gray' | 'yellow' | 'blue' string:{color}
  export let unread = false;
</script>

<li
  {...$$restProps}
  class={[
    'Box-row',
    theme && `Box-row--${theme}`,
    unread && 'Box-row--unread',
    className
  ]
    .filter(Boolean)
    .join(' ')}>
  <slot />
</li>
