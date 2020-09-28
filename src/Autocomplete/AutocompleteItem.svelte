<script>
  export let selected = false;
</script>

<li
  {...$$restProps}
  class:autocomplete-item="{true}"
  aria-selected="{selected}"
  on:click
>
  <slot />
</li>
