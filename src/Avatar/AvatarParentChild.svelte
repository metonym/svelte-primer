<script>
  import Avatar from "./Avatar.svelte";
</script>

<div
  {...$$restProps}
  class:avatar-parent-child={true}
  class:d-inline-flex={true}>
  <slot />
</div>
