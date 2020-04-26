<script>
  let className = undefined;
  export { className as class };
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
    class={['TimelineItem-badge', color && `bg-${color}`, color && 'text-white', className].join(' ')}
    {href}
    on:click>
    <slot />
  </a>
{:else}
  <div
    {...$$restProps}
    class={['TimelineItem-badge', color && `bg-${color}`, color && 'text-white', className].join(' ')}>
    <slot />
  </div>
{/if}
