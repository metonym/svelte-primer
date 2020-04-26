<script>
  export let type = "button"; // 'button' | 'link-button' | 'link' | 'octicon' | 'hidden-text'
  export let href = "javascript:void(0);";
  export let size = undefined; // 'small' | 'large'
  export let kind = undefined; // 'primary' | 'danger' | 'outline'
  export let disabled = false;
  export let block = false;
  export let invisible = false;
  export let close = false;
  export let expanded = false;
  export let inline = false;

  import X from "svelte-octicons/lib/X";
</script>

{#if type === 'button'}
  <button
    {...$$restProps}
    type="button"
    class:btn={true}
    class:btn-sm={size === 'small'}
    class:btn-large={size === 'large'}
    class:btn-primary={kind === 'primary'}
    class:btn-danger={kind === 'danger'}
    class:btn-outline={kind === 'outline'}
    class:btn-block={block}
    class:btn-invisible={invisible}
    aria-disabled={disabled}
    on:click>
    <slot />
  </button>
{/if}

{#if type === 'link-button'}
  <button {...$$restProps} type="button" class:btn-link={true} on:click>
    <slot />
  </button>
{/if}

{#if type === 'link'}
  <a
    {...$$restProps}
    role="button"
    {href}
    class:btn={true}
    class:btn-sm={size === 'small'}
    class:btn-large={size === 'large'}
    class:btn-primary={kind === 'primary'}
    class:btn-danger={kind === 'danger'}
    class:btn-outline={kind === 'outline'}
    class:btn-block={block}
    class:btn-invisible={invisible}
    aria-disabled={disabled}
    on:click>
    <slot />
  </a>
{/if}

{#if type === 'octicon'}
  <button
    {...$$restProps}
    type="button"
    class:btn-octicon={!close}
    class:btn-octicon-danger={kind === 'danger'}
    class:close-button={close}
    on:click>
    <slot>
      {#if close}
        <X />
      {/if}
    </slot>
  </button>
{/if}

{#if type === 'hidden-text'}
  <span class="hidden-text-expander" class:inline>
    <button
      {...$$restProps}
      type="button"
      class:ellipsis-expander={true}
      aria-expanded={expanded}
      on:click
      on:click={() => {
        expanded = !expanded;
      }}>
      <slot>&hellip;</slot>
    </button>
  </span>
{/if}
