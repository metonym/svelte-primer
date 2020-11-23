<script>
  /** @type {"small" | "medium" | "large"} */
  export let size = "small";
  export let href = undefined;
</script>

{#if href}
  <a
    {...$$restProps}
    class:CircleBadge="{true}"
    class:CircleBadge--small="{size === 'small'}"
    class:CircleBadge--medium="{size === 'medium'}"
    class:CircleBadge--large="{size === 'large'}"
    href="{href}"
    on:click
  >
    <slot props="{{ class: 'CircleBadge-icon' }}" />
  </a>
{:else}
  <div
    {...$$restProps}
    class:CircleBadge="{true}"
    class:CircleBadge--small="{size === 'small'}"
    class:CircleBadge--medium="{size === 'medium'}"
    class:CircleBadge--large="{size === 'large'}"
    on:click
  >
    <slot props="{{ class: 'CircleBadge-icon' }}" />
  </div>
{/if}
