<script>
  export let color = undefined; // 'gray' | 'gray-light'
</script>

<span
  {...$$restProps}
  class:Counter={true}
  class:Counter--gray={color === 'gray'}
  class:Counter--gray-light={color === 'gray-light'}
  on:click>
  <slot />
</span>
