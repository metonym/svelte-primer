<script>
  import { Alert } from "svelte-primer";
</script>

<Alert>Flash message goes here.</Alert>

<Alert class="mt-2">
  <p>
    This is a longer flash message in it's own paragraph. It ends up looking
    something like this. If we keep adding more text, it'll eventually wrap to a
    new line.
  </p>
  <p>And this is another paragraph.</p>
</Alert>

<Alert class="mt-2" kind="warn">Flash message goes here.</Alert>

<Alert class="mt-2" kind="error">Flash message goes here.</Alert>

<Alert class="mt-2" kind="success">Flash message goes here.</Alert>

<Alert class="mt-2" full kind="success" dismissable>Success message</Alert>
