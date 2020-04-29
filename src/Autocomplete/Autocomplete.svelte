<script>
  export let value = "";

  import Input from "../Form/FormInput.svelte";
</script>

<div class:position-relative={true}>
  <Input
    class="input-block"
    {...$$restProps}
    bind:value
    on:input
    on:change
    on:focus
    on:blur
    on:keydown
    on:keyup />
  <ul class="autocomplete-results">
    <slot />
  </ul>
</div>
