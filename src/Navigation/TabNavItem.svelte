<script>
  export let href = "#";
  export let current = false;
</script>

<a
  {...$$restProps}
  aria-current="{current ? 'page' : undefined}"
  class:tabnav-tab="{true}"
  href="{href}"
  on:click
>
  <slot />
</a>
