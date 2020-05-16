# Box

> [Source code](../src/Box)

## Import

```js
import { Box } from "svelte-primer";
```

## Usage

```jsx
<Box.Box>Box message</Box.Box>
```

## API

### Props

| Name        | Type                                                               | Default     |
| :---------- | :----------------------------------------------------------------- | :---------- |
| kind        | `undefined` &#124; `"success"` &#124; `"warning"` &#124; `"error"` | `undefined` |
| loading     | `boolean`                                                          | `false`     |
| dismissable | `boolean`                                                          | `false`     |

`$$restProps` are passed to the top-level `div` element.

### Slots

| Name    | Default     |
| :------ | :---------- |
| default | `undefined` |

### Forwarded Events

None.

### Dispatched Events

- `on:dismiss` if `dismissable={true}`

### Component Signature

```jsx
<Toast
  kind={undefined | "success" | "warning" | "error"}
  loading={Boolean}
  dismissable={Boolean}
  on:dismiss="{() => {}}"
>
  <slot />
</Toast>
```
