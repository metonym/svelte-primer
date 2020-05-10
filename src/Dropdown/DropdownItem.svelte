<script>
  export let href = "#";
</script>

<li>
  <a {...$$restProps} class:dropdown-item={true} {href} on:click>
    <slot />
  </a>
</li>
