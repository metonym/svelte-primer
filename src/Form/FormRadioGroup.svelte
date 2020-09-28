<script>
  export let value = undefined;
  export let options = []; // { id?:string; value: string; }[]

  $: if (value === undefined && options.length > 0) {
    value = options[0].value;
  }
</script>

<div class="radio-group">
  {#each options as option, i (option.value)}
    <input
      {...$$restProps}
      type="radio"
      class:radio-input="{true}"
      id="{option.id || option.value.toLowerCase().replace(/\s+/g, '-')}"
      bind:group="{value}"
      value="{option.value}"
      checked="{value === option.value}"
    />
    <label
      class="radio-label"
      for="{option.id || option.value.toLowerCase().replace(/\s+/g, '-')}"
    >
      {option.value}
    </label>
  {/each}
</div>
