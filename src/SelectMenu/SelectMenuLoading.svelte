<script>
  import Octoface from "svelte-octicons/lib/Octoface";
</script>

<div class="SelectMenu-loading">
  <slot>
    <Octoface class="anim-pulse" />
  </slot>
</div>
