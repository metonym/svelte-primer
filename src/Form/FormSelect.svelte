<script>
  /** @type {any} */
  export let value = undefined;

  /** @type {{ id?:string; value: string; }[]} */
  export let options = [];
  export let small = false;
</script>

<select
  {...$$restProps}
  class:form-select="{true}"
  class:select-sm="{small}"
  bind:value
  on:change
  on:focus
  on:blur
  on:keydown
  on:keyup
>
  {#each options as option, i (option.value)}
    <option value="{option.value}">{option.value}</option>
  {/each}
</select>
