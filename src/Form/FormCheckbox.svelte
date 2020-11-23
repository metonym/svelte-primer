<script>
  export let id = "primer-" + Math.random().toString(36);

  /** @type {"checkbox" | "radio"}*/
  export let type = "checkbox";
  export let checked = false;
  export let label = "Label";
  export let emphasis = false;
  export let child = false;
</script>

<div class="form-checkbox">
  {#if child}
    <label aria-live="polite">
      <input
        {...$$restProps}
        type="{type}"
        checked
        aria-describedby="{id}"
        on:focus
        on:blur
        on:keydown
        on:keyup
        on:change="{() => {
          checked = !checked;
        }}"
        class:form-checkbox-details-trigger="{true}"
      />
      {#if emphasis}<em class="highlight">{label}</em>{:else}{label}{/if}
      <span class="form-checkbox-details text-normal">
        <slot />
      </span>
    </label>
  {:else}
    <label>
      <input
        {...$$restProps}
        type="{type}"
        checked
        aria-describedby="{id}"
        on:focus
        on:blur
        on:keydown
        on:keyup
        on:change="{() => {
          checked = !checked;
        }}"
      />
      {#if emphasis}<em class="highlight">{label}</em>{:else}{label}{/if}
    </label>
    <slot props="{{ id, class: 'note' }}" />
  {/if}
</div>
