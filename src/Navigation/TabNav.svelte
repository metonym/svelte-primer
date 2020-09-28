<div {...$$restProps} class:tabnav="{true}">
  <slot name="actions" props="{{ class: 'float-right' }}" />
  <slot name="extra" props="{{ class: 'tabnav-extra float-right' }}" />
  <nav class="tabnav-tabs">
    <slot />
  </nav>
</div>
