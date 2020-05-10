<script>
  export let selected = false;
</script>

<button class="SelectMenu-tab" aria-selected={selected} on:click>
  <slot />
</button>
