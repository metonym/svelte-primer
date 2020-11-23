<script>
  export let title = "Dropdown";

  /** @type {"n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw"} */
  export let direction = "se";
  export let dark = false;
</script>

<details
  class="{[
    'dropdown details-reset details-overlay d-inline-block',
    $$restProps.class,
  ]
    .filter(Boolean)
    .join(' ')}"
>
  <summary class="btn" aria-haspopup="true">
    {title}
    <div class="dropdown-caret"></div>
  </summary>
  <ul
    class="{[
      'dropdown-menu',
      `dropdown-menu-${direction}`,
      dark && 'dropdown-menu-dark',
    ]
      .filter(Boolean)
      .join(' ')}"
  >
    <slot />
  </ul>
</details>
