# BoxOverlay

> [Source code](../src/BoxOverlay.svelte)

## Import

```js
import { BoxOverlay } from "svelte-primer";
```

## Usage

```jsx
<BoxOverlay>
  <div class="p-3">Content</div>
</BoxOverlay>
```

## API

### Props

| Name               | Type                                          | Default         |
| :----------------- | :-------------------------------------------- | :-------------- |
| summary            | `string`                                      | `"Open dialog"` |
| size               | `undefined` &#124; `"narrow"` &#124; `"wide"` | `undefined`     |
| open               | `boolean`                                     | `false`         |
| transparentOverlay | `boolean`                                     | `false`         |

### Slots

| Name          | Default                                                                       |
| :------------ | :---------------------------------------------------------------------------- |
| default       | `undefined`                                                                   |
| name="footer" | `<div class="Box-footer"><Button block on:click={close}>Close</Button></div>` |

### Forwarded Events

None.

### Dispatched Events

None.

### Component Signature

```jsx
<BoxOverlay
  summary={String}
  size={undefined | "narrow" | "wide"}
  open={Boolean}
  transparentOverlay={Boolean}
>
  <slot />
  <slot name="footer" />
</BoxOverlay>
```
