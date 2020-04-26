<script>
  export let spacious = false;
  export let danger = false;
</script>

<div class:Subhead={true} class:Subhead--spacious={spacious}>
  <slot
    name="heading"
    props={{ class: ['Subhead-heading', danger && 'Subhead-heading--danger'].join(' ') }} />
  <slot name="actions" props={{ class: 'Subhead-actions' }} />
  <slot name="description" props={{ class: 'Subhead-description' }} />
</div>
