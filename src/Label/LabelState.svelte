<script>
  export let status = undefined; // 'open' | 'closed' | 'merged'

  import GitPullRequest from "svelte-octicons/lib/GitPullRequest";
  import GitMerge from "svelte-octicons/lib/GitMerge";

  $: icon = {
    open: GitPullRequest,
    closed: GitPullRequest,
    merged: GitMerge,
  };
</script>

<span
  {...$$restProps}
  class:State="{true}"
  class:State--green="{status === 'open'}"
  class:State--red="{status === 'closed'}"
  class:State--purple="{status === 'merged'}"
  on:click
>
  <slot>
    <svelte:component this="{icon[status]}" />
    {#if status !== undefined}
      {status.slice(0, 1).toUpperCase() + status.slice(1)}
    {:else}Default{/if}
  </slot>
</span>
