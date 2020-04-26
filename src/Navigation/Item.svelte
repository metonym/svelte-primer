<script>
  export let href = "#url";
  export let current = false;

  import { getContext } from "svelte";

  const ctx = getContext("Navigation");
  // get context to set unique class
</script>

<!-- class:subnav-item -->
<!-- <a class="subnav-item" href="#url" aria-current="page">Item 1</a> -->
<a {...$$restProps} aria-current={current ? 'page' : undefined} {href}>
  <slot />
</a>
