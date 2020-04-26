<script>
  export let title = "Title";
  export let paragraphText = "Text";
  export let buttonText = "Button text";

  import Repo from "svelte-octicons/lib/Repo";
  import Button from "../Button/Button.svelte";
</script>

<div class="SelectMenu-blankslate">
  <slot name="icon">
    <Repo />
  </slot>
  <slot>
    <h4 class="my-2">{title}</h4>
    <p class="mb-3 text-gray">{paragraphText}</p>
  </slot>
  <slot name="button">
    <Button kind="primary" size="small" on:click>{buttonText}</Button>
  </slot>
</div>
