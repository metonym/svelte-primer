<script>
  export let selected = false;
</script>

<button class="SelectMenu-tab" aria-selected={selected}>
  <slot />
</button>
