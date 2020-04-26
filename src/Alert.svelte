<script>
  export let full = false;
  export let banner = false;
  export let kind = undefined; // 'success' | 'warn' | 'error'
  export let dismissable = false;

  import X from "svelte-octicons/lib/X";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<div
  {...$$restProps}
  class:flash={true}
  class:flash-full={full}
  class:flash-banner={banner}
  class:flash-success={kind === 'success'}
  class:flash-warn={kind === 'warn'}
  class:flash-error={kind === 'error'}>
  {#if dismissable}
    <button
      class="flash-close js-flash-close"
      type="button"
      on:click={() => {
        dispatch('dismiss');
      }}>
      <X aria-label="Close" role="img" />
    </button>
  {/if}
  <slot />
</div>
