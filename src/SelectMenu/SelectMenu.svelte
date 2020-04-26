<script>
  export let summary = "Select menu";
  export let title = "Title";
  export let open = false;
  export let align = "left"; // 'left' | 'right'

  import X from "svelte-octicons/lib/X";
</script>

<details class="details-reset details-overlay" {open}>
  <summary class="btn" aria-haspopup="true">{summary}</summary>
  <div class="SelectMenu" class:right-0={align === 'right'}>
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <slot name="title">
          <h3 class="SelectMenu-title">{title}</h3>
        </slot>
        <button class="SelectMenu-closeButton" type="button">
          <X />
        </button>
      </header>
      <slot name="filter" />
      <slot name="tabs" />
      <div class="SelectMenu-list">
        <slot />
      </div>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px">
  <!-- min height for < sm -->
</div>
<div class="d-none d-sm-block" style="height: 180px">
  <!-- min height for > sm -->
</div>
