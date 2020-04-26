<script>
  export let condensed = false;

  import { setContext } from "svelte";

  let id = undefined;

  setContext("TimelineItem", {
    set: href => {
      id = href.replace(/\#/g, "");
    }
  });
</script>

<div
  {...$$restProps}
  {id}
  class:TimelineItem={true}
  class:TimelineItem--condensed={condensed}>
  <slot name="avatar" />
  <slot name="badge" />
  <div class="TimelineItem-body">
    <slot />
  </div>
</div>
