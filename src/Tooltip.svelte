<script>
  let className = "";
  export { className as class };
  export let direction = "n"; // 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'
  export let text = "Tooltip text";
  export let align = undefined; // 'left' | 'right'
  export let alignIndent = 1; // 1 | 2
  export let noDelay = false;
  export let multiline = false;
</script>

<span
  {...$$restProps}
  aria-label={text}
  class={[
    'tooltipped',
    `tooltipped-${direction}`,
    align && `tooltipped-align-${align}-${alignIndent}`,
    noDelay && 'tooltipped-no-delay',
    multiline && 'tooltipped-multiline',
    className
  ]
    .filter(Boolean)
    .join(' ')}>
  <slot />
</span>
