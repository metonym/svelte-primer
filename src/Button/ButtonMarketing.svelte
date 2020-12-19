<script>
  /** @type {"primary" | "outline"} */
  export let kind = undefined;
  export let transparent = false;
  export let large = false;
</script>

<button
  type="button"
  {...$$restProps}
  class="{[
    'btn-mktg mr-2',
    kind && `btn-${kind}-mktg`,
    large && 'btn-large-mktg',
    transparent && 'btn-transparent',
  ]
    .filter(Boolean)
    .join(' ')}"
  on:click
>
  <slot />
</button>
