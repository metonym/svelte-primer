<script>
  export let title = "Avatar stack title";
  export let align = "left"; // 'left' | 'right'

  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  const avatars = writable([]);

  setContext("AvatarStack", {
    add: item => {
      avatars.update(_ => [..._, item]);
    },
    remove: item => {
      avatars.update(_ => _.filter(avatar => avatar.id !== item.id));
    }
  });
</script>

<div
  class:AvatarStack={true}
  class:AvatarStack--two={$avatars.length === 2}
  class:AvatarStack--three-plus={$avatars.length > 2}
  class:AvatarStack--right={align === 'right'}>
  <div
    class="AvatarStack-body tooltipped"
    class:tooltipped-se={align === 'left'}
    class:tooltipped-align-left-1={align === 'left'}
    class:tooltipped-sw={align === 'right'}
    class:tooltipped-align-right-1={align === 'right'}
    aria-label={title}>
    <slot />
  </div>
</div>
