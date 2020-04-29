<script>
  export let id = "primer-" + Math.random().toString(36);
  export let label = "Label";
  export let validation = undefined; // 'success' | 'warning' | 'error'
  export let validationText = undefined;
</script>

<div
  {...$$restProps}
  class:form-group={true}
  class:successed={validation === 'success'}
  class:errored={validation === 'error'}
  class:warn={validation === 'warning'}>
  <div class="form-group-header">
    <label for={id}>{label}</label>
  </div>
  <div class="form-group-body">
    <slot props={{ id }} />
  </div>
  {#if validation}
    <p class="note {validation}">{validationText}</p>
  {/if}
</div>
