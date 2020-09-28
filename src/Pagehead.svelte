<script>
  /**
   * <Pagehead>Title</Pagehead>
   *
   * <Pagehead>
   *  <Avatar />
   *  Avatar
   * </Pagehead>
   *
   * <Pagehead>
   *  <ul slot="actions" class="pagehead-actions">
   *   ...
   *  </ul>
   *  Title
   * </Pagehead>
   */
</script>

<div {...$$restProps} class:pagehead="{true}">
  <slot name="actions" props="{{ class: 'pagehead-actions' }}" />
  <h1>
    <slot />
  </h1>
</div>
