# Alert

> [Source code](../src/Alert.svelte)

## Usage

```html
<script>
  import { Alert } from "svelte-primer";
</script>

<Alert>Flash message goes here.</Alert>
```

## API

### Props

| Name        | Type                                   | Default     |
| :---------- | :------------------------------------- | :---------- |
| full        | `boolean`                              | `false`     |
| banner      | `boolean`                              | `false`     |
| kind        | `success` &#124; `warn` &#124; `error` | `undefined` |
| dismissable | `boolean`                              | `false`     |

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
  full={true}
  banner={true}
  kind={"success"}
  dismissable={true}
  on:dismiss="{() => {}}"
>
  <slot />
</Alert>
```
