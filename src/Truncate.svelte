<script>
  let className = "";
  export { className as class };
  export let style = undefined;
  export let fixed = false;
</script>

<div
  {...$$restProps}
  class={[
    'css-truncate',
    !fixed && 'css-truncate-overflow',
    fixed && 'css-truncate-target',
    className
  ]
    .filter(Boolean)
    .join(' ')}
  style={[!style && fixed && 'max-width: 125px', style].join(';')}>
  <slot />
</div>
