# Truncate

> [Source code](../src/Truncate.svelte)

## Usage

```html
<script>
  import { Truncate } from "svelte-primer";
</script>

<Truncate title="branch-name-that-is-really-long">
  branch-name-that-is-really-long
</Truncate>
```

## API

### Props

| Name  | Type      | Default |
| :---- | :-------- | :------ |
| fixed | `boolean` | `false` |

`$$restProps` are passed to the top-level `div` element.

### Slots

| Name    | Default     |
| :------ | :---------- |
| default | `undefined` |

### Forwarded Events

None.

### Dispatched Events

None.

### Component Signature

```jsx
<Truncate {fixed}>
  <slot />
</Truncate>
```
