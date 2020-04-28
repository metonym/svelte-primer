<script>
  export let search = false;
  export let value = "";

  import Search from "svelte-octicons/lib/Search";
</script>

{#if search}
  <div class:subnav={true}>
    <nav class="subnav-links">
      <slot />
    </nav>
    <div class="subnav-search float-left">
      <input
        {...$$restProps}
        type="search"
        class:form-control={true}
        class:subnav-search-input={true}
        bind:value
        on:input
        on:change
        on:focus
        on:blur
        on:keydown
        on:keyup />
      <Search class="subnav-search-icon" />
    </div>
  </div>
{:else}
  <nav {...$$restProps} class:subnav={true}>
    <slot />
  </nav>
{/if}
