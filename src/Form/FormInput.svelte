<script>
  export let value = "";
  export let type = "text";

  export let placeholder = "Placeholder text";
  export let size = undefined; // 'small' | 'large'
  export let block = false;
  export let contrast = false;
  export let dark = false;
  export let hideWebkitAutofill = false;
</script>

<input
  {...$$restProps}
  class:form-control={true}
  class:input-sm={size === 'small'}
  class:input-lg={size === 'large'}
  class:input-contrast={contrast}
  class:input-block={block}
  class:input-dark={dark}
  class:input-hide-webkit-autofill={hideWebkitAutofill}
  {type}
  {placeholder}
  aria-label={placeholder}
  {value}
  on:input={({ target }) => {
    value = target.value;
  }} />
