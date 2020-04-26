<script>
  export let type = "button";
  export let kind = undefined; // 'primary' | 'outline'
  export let transparent = false;
  export let large = false;
</script>

<button
  {...$$restProps}
  {type}
  class={[
    'btn-mktg mr-2',
    kind && `btn-${kind}-mktg`,
    large && 'btn-large-mktg',
    transparent && 'btn-transparent'
  ]
    .filter(Boolean)
    .join(' ')}
  on:click>
  <slot />
</button>
