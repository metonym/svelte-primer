<script>
  import { Autocomplete } from "svelte-primer";
</script>

<div style="max-width: 300px">
  <Autocomplete.Autocomplete aria-label="Search" placeholder="Search">
    <Autocomplete.Item selected>Option 1</Autocomplete.Item>
    <Autocomplete.Item>Option 2</Autocomplete.Item>
    <Autocomplete.Item>Option 3</Autocomplete.Item>
  </Autocomplete.Autocomplete>
</div>
