<script>
  export let kind = undefined; // 'success' | 'warning' | 'error'
  export let loading = false;
  export let dismissable = false;

  import Info from "svelte-octicons/lib/Info";
  import success from "svelte-octicons/lib/Check";
  import warning from "svelte-octicons/lib/Alert";
  import error from "svelte-octicons/lib/Stop";
  import X from "svelte-octicons/lib/X";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  $: icon = { success, warning, error };
</script>

<div
  {...$$restProps}
  class:Toast={true}
  class:Toast--success={kind === 'success'}
  class:Toast--warning={kind === 'warning'}
  class:Toast--error={kind === 'error'}
  class:Toast--loading={loading}>
  <span class="Toast-icon">
    {#if loading}
      <svg class="Toast--spinner" viewBox="0 0 32 32" width="18" height="18">
        <path
          fill="#959da5"
          d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28
          A12 12 0 0 1 16 4" />
        <path
          fill="#ffffff"
          d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z" />
      </svg>
    {/if}
    {#if !loading}
      <svelte:component this={icon[kind] || Info} />
    {/if}
  </span>
  <span class="Toast-content">
    <slot />
  </span>
  {#if dismissable}
    <button
      class="Toast-dismissButton"
      on:click={() => {
        dispatch('dismiss');
      }}>
      <X />
    </button>
  {/if}
</div>
