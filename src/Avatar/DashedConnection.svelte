<script>
  export let title = "Title";
</script>

<div {...$$restProps} class:DashedConnection={true}>
  <ul class="d-flex list-style-none flex-justify-between" aria-label={title}>
    <slot />
  </ul>
</div>
