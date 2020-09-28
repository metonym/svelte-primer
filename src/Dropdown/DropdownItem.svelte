<script>
  export let href = "#";
</script>

<li>
  <a {...$$restProps} class:dropdown-item="{true}" href="{href}" on:click>
    <slot />
  </a>
</li>
