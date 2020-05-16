<script>
  import { Alert } from "svelte-primer";
</script>

<Alert>Flash message goes here.</Alert>

<Alert>
  <p>
    This is a longer flash message in it's own paragraph. It ends up looking
    something like this. If we keep adding more text, it'll eventually wrap to a
    new line.
  </p>
  <p>And this is another paragraph.</p>
</Alert>

<Alert kind="warn">Flash message goes here.</Alert>

<Alert kind="error">Flash message goes here.</Alert>

<Alert kind="success">Flash message goes here.</Alert>

<Alert full kind="success" dismissable>Success message</Alert>
