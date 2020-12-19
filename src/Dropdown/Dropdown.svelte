<script>
  export let title = "Dropdown";

  /** @type {"n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw"} */
  export let direction = "se";
  export let dark = false;
  export let open = false;

  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  const _open = writable(open);

  setContext("Dropdown", {
    open: () => {
      open = true;
    },
    close: () => {
      open = false;
    },
  });

  $: _open.set(open);
</script>

<details
  class="{[
    'dropdown details-reset details-overlay d-inline-block',
    $$restProps.class,
  ]
    .filter(Boolean)
    .join(' ')}"
  bind:open
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
