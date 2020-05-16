<script>
  import { Progress } from "svelte-primer";
</script>

<Progress progress={50} />

<Progress class="mt-4">
  <span class="bg-green" style="width: 80%" />
  <span class="bg-purple" style="width: 14%" />
  <span class="bg-red" style="width: 6%" />
</Progress>
