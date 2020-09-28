<script>
  export let value = "";
</script>

<textarea
  {...$$restProps}
  class:form-control="{true}"
  bind:value
  on:input
  on:change
  on:focus
  on:blur
  on:keydown
  on:keyup
></textarea>
