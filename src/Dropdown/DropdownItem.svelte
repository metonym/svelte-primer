<script>
  export let href = "#";

  import { getContext } from "svelte";

  const ctx = getContext("Dropdown");
</script>

<li>
  <a
    {...$$restProps}
    class:dropdown-item="{true}"
    href="{href}"
    on:click
    on:click="{() => {
      ctx.close();
    }}"
  >
    <slot />
  </a>
</li>
