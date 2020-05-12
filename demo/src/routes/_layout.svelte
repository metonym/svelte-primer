<script>
  export let segment = undefined;

  import * as Primer from "svelte-primer";
  import { MarkGithub } from "svelte-octicons";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import pkg from "../../../package.json";

  const tail = writable(undefined);

  setContext("Root", {
    set: current => {
      tail.set(current);
    },
    clear: () => {
      tail.set(undefined);
    }
  });

  $: components = Object.keys(Primer);
</script>

<Primer.Header.Header>
  <Primer.Header.Item>
    <Primer.Header.Link
      href={process.env.NODE_ENV === 'development' ? '/' : '/svelte-primer/'}>
      <span class="f4">svelte-primer</span>
      <span class="f6 ml-1 text-gray-light">v{pkg.version}</span>
    </Primer.Header.Link>
  </Primer.Header.Item>
  <Primer.Header.Item class="mr-0" style="margin-left: auto">
    <Primer.Header.Link href="https://github.com/metonym/svelte-primer">
      <MarkGithub width={24} height={24} />
    </Primer.Header.Link>
  </Primer.Header.Item>
</Primer.Header.Header>

<div class="d-flex">
  <aside class="bg-gray-light border-right">
    <Primer.Navigation.SideNav class="p-3 pr-6">
      <h5 class="text-gray mb-2 pb-1 border-bottom">Components</h5>
      {#each components as component, i (component)}
        <Primer.Navigation.SideNavSubItem
          href="components/{component}/"
          current={segment === 'components' && $tail === component}>
          {component}
        </Primer.Navigation.SideNavSubItem>
      {/each}
    </Primer.Navigation.SideNav>
  </aside>
  <div class="d-table table-fixed width-full p-6" style="max-width: 740px">
    <slot />
  </div>
</div>
