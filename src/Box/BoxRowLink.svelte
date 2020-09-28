<script>
  export let href = "#";
</script>

<a {...$$restProps} class:Box-row-link="{true}" href="{href}" on:click>
  <slot />
</a>
