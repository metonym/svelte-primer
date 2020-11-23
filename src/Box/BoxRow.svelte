<script>
  /** @type {"gray" | "yellow" | "blue" | string} */
  export let theme = undefined;
  export let unread = false;
</script>

<li
  {...$$restProps}
  class="{[
    'Box-row',
    theme && `Box-row--${theme}`,
    unread && 'Box-row--unread',
    $$restProps.class,
  ]
    .filter(Boolean)
    .join(' ')}"
>
  <slot />
</li>
