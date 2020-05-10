<script>
  export let title = "Dropdown";
  export let direction = "se"; // 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'
  export let dark = false;
</script>

<details
  class={[
    'dropdown details-reset details-overlay d-inline-block',
    $$restProps.class
  ]
    .filter(Boolean)
    .join(' ')}>
  <summary class="btn" aria-haspopup="true">
    {title}
    <div class="dropdown-caret" />
  </summary>
  <ul
    class={[
      'dropdown-menu',
      `dropdown-menu-${direction}`,
      dark && 'dropdown-menu-dark'
    ]
      .filter(Boolean)
      .join(' ')}>
    <slot />
  </ul>
</details>
