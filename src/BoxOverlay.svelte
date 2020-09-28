<script>
  export let summary = "Open dialog";
  export let size = undefined; // 'narrow' | 'wide'
  export let open = false;
  export let transparentOverlay = false;

  import X from "svelte-octicons/lib/X";
  import Button from "./Button/Button.svelte";

  let ref = undefined;

  function close() {
    ref.removeAttribute("open");
  }
</script>

<style>
  details-dialog {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 50%;
    width: 440px;
    max-width: 90vw;
    max-height: 80vh;
    margin: 10vh auto;
    transform: translateX(-50%);
  }

  .Box-overlay--narrow {
    width: 320px;
  }

  .Box-overlay--wide {
    width: 640px;
  }
</style>

<svelte:body
  on:keydown="{({ key }) => {
    if (ref.hasAttribute('open') && key === 'Escape') {
      close();
    }
  }}" />

<details
  bind:this="{ref}"
  class="details-reset details-overlay"
  class:details-overlay-dark="{!transparentOverlay}"
  open="{open}"
>
  <summary class="btn" aria-haspopup="dialog">{summary}</summary>
  <details-dialog
    class="Box Box--overlay d-flex flex-column anim-fade-in fast"
    class:Box-overlay--narrow="{size === 'narrow'}"
    class:Box-overlay--wide="{size === 'wide'}"
  >
    <div class="Box-header">
      <button
        class="Box-btn-octicon btn-octicon float-right"
        type="button"
        aria-label="Close dialog"
        on:click="{close}"
      >
        <X />
      </button>
      <h3 class="Box-title">Box title</h3>
    </div>
    <div class="overflow-auto">
      <slot />
    </div>
    <slot name="footer" props="{{ class: 'Box-footer' }}">
      <div class="Box-footer">
        <Button block on:click="{close}">Close</Button>
      </div>
    </slot>
  </details-dialog>
</details>
