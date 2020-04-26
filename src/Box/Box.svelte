<script>
  export let border = undefined; // 'dashed'
  export let condensed = false;
  export let spacious = false;
  export let theme = undefined; // 'blue' | 'danger'
</script>

<div
  {...$$restProps}
  class:Box={true}
  class:border-dashed={border === 'dashed'}
  class:Box--condensed={condensed}
  class:Box--spacious={spacious}
  class:Box--blue={theme === 'blue'}
  class:Box--danger={theme === 'danger'}>
  <slot />
</div>
