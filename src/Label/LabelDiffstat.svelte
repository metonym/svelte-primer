<script>
  export let added = 3;
  export let deleted = 1;
  export let neutral = 1;
  export let title = "Diffstat title";

  const from = (length) => Array.from({ length }).map((_, i) => i);

  $: block_added = from(added);
  $: block_deleted = from(deleted);
  $: block_neutral = from(neutral);
</script>

<span {...$$restProps} class:diffstat="{true}" on:click>
  <slot name="size">
    <span class="text-green">
      <slot name="added" />
    </span>
    <span class="text-red">
      <slot name="deleted" />
    </span>
  </slot>
  <span class="d-inline-flex tooltipped tooltipped-e" aria-label="{title}">
    {#each block_added as block}
      <span class="diffstat-block-added"></span>
    {/each}
    {#each block_deleted as block}
      <span class="diffstat-block-deleted"></span>
    {/each}
    {#each block_neutral as block}
      <span class="diffstat-block-neutral"></span>
    {/each}
  </span>
</span>
