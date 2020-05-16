<script>
  import { Alert } from "svelte-primer";
</script>

<Alert>Flash message goes here.</Alert>

<Alert class="mt-2" kind="success">Success message.</Alert>

<Alert class="mt-2" kind="warn">Warning message.</Alert>

<Alert class="mt-2" kind="error" dismissable>
  Error message (dismissable).
</Alert>
