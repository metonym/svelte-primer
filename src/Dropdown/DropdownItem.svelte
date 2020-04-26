<script>
  export let href = "javascript:void(0);";
</script>

<li>
  <a {...$$restProps} class:dropdown-item={true} {href} on:click>
    <slot />
  </a>
</li>
