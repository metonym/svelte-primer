<script>
  export let value = "";
</script>

<form class="SelectMenu-filter">
  <input
    {...$$restProps}
    class="SelectMenu-input form-control"
    type="text"
    bind:value
  />
</form>
