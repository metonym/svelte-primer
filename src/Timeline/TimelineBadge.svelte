<script>
  export let color = undefined; // 'blue' | 'green' | 'red' | string:{color}
  export let href = undefined;

  import { getContext } from "svelte";

  const ctx = getContext("TimelineItem");

  $: if (ctx && href) {
    ctx.set(href);
  }
</script>

{#if href}
  <a
    {...$$restProps}
    class="{[
      'TimelineItem-badge',
      color && `bg-${color}`,
      color && 'text-white',
      $$restProps.class,
    ]
      .filter(Boolean)
      .join(' ')}"
    href="{href}"
    on:click
  >
    <slot />
  </a>
{:else}
  <div
    {...$$restProps}
    class="{[
      'TimelineItem-badge',
      color && `bg-${color}`,
      color && 'text-white',
      $$restProps.class,
    ]
      .filter(Boolean)
      .join(' ')}"
    on:click
  >
    <slot />
  </div>
{/if}
