<script>
  export let segment = undefined;

  import * as Primer from "svelte-primer";
  import { MarkGithub, ThreeBars } from "svelte-octicons";
  import { setContext, afterUpdate } from "svelte";
  import { writable } from "svelte/store";
  import pkg from "../../../package.json";

  const tail = writable(undefined);

  let expanded = false;
  let innerWidth = 0;

  setContext("Root", {
    set: current => {
      tail.set(current);
    },
    clear: () => {
      tail.set(undefined);
    }
  });

  afterUpdate(() => {
    if (expanded && innerWidth > 720) {
      expanded = false;
    }

    document.body.className = expanded
      ? "overflow-y-hidden"
      : "overflow-y-scroll";
  });

  $: components = Object.keys(Primer);
</script>

<style>
  .overlay {
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 3.75rem);
    opacity: 0.75;
  }

  main {
    max-width: 760px;
  }

  :global(.mobile-menu) {
    display: none;
  }

  @media (max-width: 720px) {
    main {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }

    :global(.mobile-menu) {
      display: block;
    }

    aside {
      position: fixed;
      z-index: 2;
      bottom: 0;
      right: 0;
      height: calc(100% - 3.75rem);
      overflow-y: scroll;
    }

    aside:not(.expanded) {
      display: none;
    }
  }
</style>

<svelte:window bind:innerWidth />

{#if segment !== 'examples'}
  <Primer.Header.Header>
    <Primer.Header.Item>
      <Primer.Header.Link
        href={process.env.NODE_ENV === 'development' ? '/' : '/svelte-primer/'}
        on:click={() => {
          expanded = false;
        }}>
        <span class="f4">svelte-primer</span>
        <span class="f6 ml-1 text-gray-light">v{pkg.version}</span>
      </Primer.Header.Link>
    </Primer.Header.Item>
    <Primer.Header.Item class="mr-0" style="margin-left: auto">
      <Primer.Header.Link href="https://github.com/metonym/svelte-primer">
        <MarkGithub width={24} height={24} />
      </Primer.Header.Link>
    </Primer.Header.Item>
    <Primer.Header.Item class="mobile-menu ml-2 mr-0">
      <Primer.Button
        variant="octicon"
        class="border border-white-fade pl-2 pr-2 rounded-1"
        aria-label="Menu"
        aria-expanded={expanded}
        on:click={() => {
          expanded = !expanded;
        }}>
        <ThreeBars />
      </Primer.Button>
    </Primer.Header.Item>
  </Primer.Header.Header>

  <div class="d-flex">
    <aside class="bg-gray-light border-right" class:expanded>
      <Primer.Navigation.SideNav class="p-3 pr-6">
        <h5 class="text-gray mb-2 pb-1 border-bottom">Components</h5>
        {#each components as component, i (component)}
          <Primer.Navigation.SideNavSubItem
            href="components/{component}/"
            on:click={() => {
              expanded = false;
            }}
            current={segment === 'components' && $tail === component}>
            {component}
          </Primer.Navigation.SideNavSubItem>
        {/each}
      </Primer.Navigation.SideNav>
    </aside>
    <main class="d-table table-fixed width-full p-6">
      <slot />
    </main>
  </div>

  {#if expanded}
    <div
      class="overlay bg-gray-dark"
      on:click={() => {
        expanded = false;
      }} />
  {/if}
{:else}
  <slot />
{/if}
