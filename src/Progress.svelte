<script>
  /**
   * Basic example:
   *
   * <Progress progress={50} {small|large} {inline} />
   *
   * Example with multiple values:
   *
   * <Progress>
   *   <span class="bg-green" style="width: 80%;" />
   *   <span class="bg-purple" style="width: 14%;" />
   *   <span class="bg-red" style="width: 6%;" />
   * </Progress>
   */

  export let progress = 50;
  export let large = false;
  export let small = false;
  export let inline = false;
</script>

<span
  {...$$restProps}
  class={[
    'Progress',
    large && 'Progress--large',
    small && 'Progress--small',
    inline && 'd-inline-flex',
    $$restProps.class
  ]
    .filter(Boolean)
    .join(' ')}
  style={[inline && 'max-width: 160px;', $$restProps.style]
    .filter(Boolean)
    .join(';')}>
  <slot>
    <span class="bg-green" style="width: {progress}%;" />
  </slot>
</span>
