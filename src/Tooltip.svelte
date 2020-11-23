<script>
  export let text = "Tooltip text";

  /** @type {"n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw"} */
  export let direction = "n";

  /** @type {"left" | "right"} */
  export let align = undefined;

  /** @type {1 | 2} */
  export let alignIndent = 1;
  export let noDelay = false;
  export let multiline = false;
</script>

<span
  {...$$restProps}
  aria-label="{text}"
  class="{[
    'tooltipped',
    `tooltipped-${direction}`,
    align && `tooltipped-align-${align}-${alignIndent}`,
    noDelay && 'tooltipped-no-delay',
    multiline && 'tooltipped-multiline',
    $$restProps.class,
  ]
    .filter(Boolean)
    .join(' ')}"
>
  <slot />
</span>
