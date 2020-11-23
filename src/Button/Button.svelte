<script>
  export let type = "button";

  /** @type {"button" | "link-button" | "link" | "octicon" | "hidden-text"} */
  export let variant = "button";
  export let href = "#";

  /** @type {"small" | "large"} */
  export let size = undefined;

  /** @type {"primary" | "danger" | "outline"} */
  export let kind = undefined;
  export let disabled = false;
  export let block = false;
  export let invisible = false;
  export let close = false;
  export let expanded = false;
  export let inline = false;

  import X from "svelte-octicons/lib/X";
</script>

{#if variant === 'button'}
  <button
    {...$$restProps}
    type="{type}"
    class:btn="{true}"
    class:btn-sm="{size === 'small'}"
    class:btn-large="{size === 'large'}"
    class:btn-primary="{kind === 'primary'}"
    class:btn-danger="{kind === 'danger'}"
    class:btn-outline="{kind === 'outline'}"
    class:btn-block="{block}"
    class:btn-invisible="{invisible}"
    aria-disabled="{disabled}"
    on:click
  >
    <slot />
  </button>
{/if}

{#if variant === 'link-button'}
  <button {...$$restProps} type="{type}" class:btn-link="{true}" on:click>
    <slot />
  </button>
{/if}

{#if variant === 'link'}
  <a
    {...$$restProps}
    role="button"
    href="{href}"
    class:btn="{true}"
    class:btn-sm="{size === 'small'}"
    class:btn-large="{size === 'large'}"
    class:btn-primary="{kind === 'primary'}"
    class:btn-danger="{kind === 'danger'}"
    class:btn-outline="{kind === 'outline'}"
    class:btn-block="{block}"
    class:btn-invisible="{invisible}"
    aria-disabled="{disabled}"
    on:click
  >
    <slot />
  </a>
{/if}

{#if variant === 'octicon'}
  <button
    {...$$restProps}
    type="{type}"
    class:btn-octicon="{!close}"
    class:btn-octicon-danger="{kind === 'danger'}"
    class:close-button="{close}"
    on:click
  >
    <slot>
      {#if close}
        <X />
      {/if}
    </slot>
  </button>
{/if}

{#if variant === 'hidden-text'}
  <span class="hidden-text-expander" class:inline>
    <button
      {...$$restProps}
      type="{type}"
      class:ellipsis-expander="{true}"
      aria-expanded="{expanded}"
      on:click
      on:click="{() => {
        expanded = !expanded;
      }}"
    >
      <slot>&hellip;</slot>
    </button>
  </span>
{/if}
