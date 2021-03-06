# Alert

> [Source code](../src/Alert.svelte)

## Import

```js
import { Alert } from "svelte-primer";
```

## Usage

```jsx
<Alert>Flash message goes here.</Alert>
```

## API

### Props

| Name        | Type                                                            | Default     |
| :---------- | :-------------------------------------------------------------- | :---------- |
| full        | `boolean`                                                       | `false`     |
| banner      | `boolean`                                                       | `false`     |
| kind        | `undefined` &#124; `"success"` &#124; `"warn"` &#124; `"error"` | `undefined` |
| dismissable | `boolean`                                                       | `false`     |

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
<Alert
  full={Boolean}
  banner={Boolean}
  kind={undefined | "success" | "warn" | "error"}
  dismissable={Boolean}
  on:dismiss="{() => {}}"
>
  <slot />
</Alert>
```
