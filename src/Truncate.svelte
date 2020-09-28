<script>
  export let fixed = false;
</script>

<div
  {...$$restProps}
  class="{[
    'css-truncate',
    !fixed && 'css-truncate-overflow',
    fixed && 'css-truncate-target',
    $$restProps.class,
  ]
    .filter(Boolean)
    .join(' ')}"
  style="{[!$$restProps.style && fixed && 'max-width: 125px', $$restProps.style]
    .filter(Boolean)
    .join(';')}"
>
  <slot />
</div>
